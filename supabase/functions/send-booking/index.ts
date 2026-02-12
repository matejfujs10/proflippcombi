import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

// Rate limiting configuration
const RATE_LIMIT_WINDOW_HOURS = 1;
const MAX_SUBMISSIONS_PER_IP = 5;
const MAX_SUBMISSIONS_PER_EMAIL = 3;
const HASH_SALT = "proflipp-kombi-rate-limit-2024";

// SHA-256 hash helper for PII protection
const hashValue = async (value: string): Promise<string> => {
  const encoder = new TextEncoder();
  const data = encoder.encode(value.toLowerCase() + HASH_SALT);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, "0")).join("");
};

// PII masking helpers for secure logging
const maskEmail = (email: string): string => {
  const [local, domain] = email.split("@");
  if (!domain) return "***@***";
  return `${local.charAt(0)}***@${domain}`;
};

const maskIp = (ip: string): string => {
  if (ip === "unknown") return "unknown";
  const parts = ip.split(".");
  if (parts.length !== 4) return "***";
  return `${parts[0]}.${parts[1]}.*.*`;
};

// Initialize Supabase client with service role for rate limit checks
const getSupabaseAdmin = () => {
  return createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
  );
};

// Check rate limits and log submission
const checkRateLimit = async (ipAddress: string, email: string): Promise<{ allowed: boolean; reason?: string }> => {
  const supabase = getSupabaseAdmin();
  const windowStart = new Date(Date.now() - RATE_LIMIT_WINDOW_HOURS * 60 * 60 * 1000).toISOString();

  // Hash PII before querying
  const hashedIp = await hashValue(ipAddress);
  const hashedEmail = await hashValue(email);

  // Check IP-based rate limit
  const { count: ipCount, error: ipError } = await supabase
    .from("booking_submissions")
    .select("*", { count: "exact", head: true })
    .eq("ip_address", hashedIp)
    .gte("created_at", windowStart);

  if (ipError) {
    console.error("Rate limit check failed (IP):", ipError);
    return { allowed: true };
  }

  if ((ipCount ?? 0) >= MAX_SUBMISSIONS_PER_IP) {
    console.warn(`Rate limit exceeded for IP: ${maskIp(ipAddress)}`);
    return { allowed: false, reason: "Too many requests from this location. Please try again later." };
  }

  // Check email-based rate limit
  const { count: emailCount, error: emailError } = await supabase
    .from("booking_submissions")
    .select("*", { count: "exact", head: true })
    .eq("email", hashedEmail)
    .gte("created_at", windowStart);

  if (emailError) {
    console.error("Rate limit check failed (email):", emailError);
    return { allowed: true };
  }

  if ((emailCount ?? 0) >= MAX_SUBMISSIONS_PER_EMAIL) {
    console.warn(`Rate limit exceeded for email: ${maskEmail(email)}`);
    return { allowed: false, reason: "Too many requests for this email. Please try again later." };
  }

  return { allowed: true };
};

// Log successful submission for rate limiting
const logSubmission = async (ipAddress: string, email: string): Promise<void> => {
  const supabase = getSupabaseAdmin();
  
  // Hash PII before storing
  const hashedIp = await hashValue(ipAddress);
  const hashedEmail = await hashValue(email);

  const { error } = await supabase
    .from("booking_submissions")
    .insert({ ip_address: hashedIp, email: hashedEmail });

  if (error) {
    console.error("Failed to log submission:", error);
  }

  // Cleanup old entries periodically (1 in 10 chance to avoid running every request)
  if (Math.random() < 0.1) {
    const { error: cleanupError } = await supabase.rpc("cleanup_old_booking_submissions");
    if (cleanupError) {
      console.error("Cleanup failed:", cleanupError);
    }
  }
};

// Input validation schema
const BookingSchema = z.object({
  firstName: z.string().min(1).max(50).regex(/^[a-zA-ZÀ-žčšžČŠŽćĆđĐ\s-]+$/, "Invalid characters in first name"),
  lastName: z.string().min(1).max(50).regex(/^[a-zA-ZÀ-žčšžČŠŽćĆđĐ\s-]+$/, "Invalid characters in last name"),
  email: z.string().email("Invalid email format").max(100),
  phone: z.string().min(3, "Phone number too short").max(30, "Phone number too long").regex(/^\+?[0-9\s()/-]{3,30}$/, "Invalid phone format"),
  departureDate: z.string().min(1).max(100),
  arrivalDate: z.string().min(1).max(100),
  passengers: z.string().regex(/^[1-5]$/, "Passengers must be 1-5"),
  message: z.string().max(1000).optional().default(""),
  lang: z.enum(["SL", "EN", "DE", "HR"]),
  // Honeypot field - should always be empty for real users
  company: z.string().max(100).optional().default(""),
});

type BookingRequest = z.infer<typeof BookingSchema>;

// HTML escape function to prevent XSS in emails
const escapeHtml = (text: string): string => {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

const getConfirmationEmail = (data: BookingRequest) => {
  const translations = {
    SL: {
      subject: "Potrditev rezervacije - PROFLIPP KOMBI",
      greeting: `Spoštovani ${escapeHtml(data.firstName)}`,
      thankYou: "hvala za vašo rezervacijo PROFLIPP KOMBI – prvi korak do nove dogodivščine je narejen 🚐✨",
      received: "Vašo zahtevo smo prejeli in vas bomo v najkrajšem možnem času (do 24 ur) kontaktirali za potrditev rezervacije ter vse nadaljnje informacije.",
      visitSite: "Do takrat pa vas vabimo, da si ogledate dodatne podrobnosti na",
      siteUrl: "combi.proflipp.com",
      details: "Podrobnosti rezervacije:",
      name: "Ime in priimek",
      email: "E-pošta",
      phone: "Telefon",
      departure: "Datum odhoda",
      arrival: "Datum prihoda",
      passengers: "Število potnikov",
      message: "Sporočilo",
      regards: "Lep pozdrav",
      team: "TEAM PROFLIPP",
    },
    EN: {
      subject: "Booking Confirmation - PROFLIPP KOMBI",
      greeting: `Dear ${escapeHtml(data.firstName)}`,
      thankYou: "thank you for your PROFLIPP KOMBI reservation – the first step to a new adventure is made 🚐✨",
      received: "We have received your request and will contact you as soon as possible (within 24 hours) to confirm your booking and provide all further information.",
      visitSite: "In the meantime, we invite you to check out more details at",
      siteUrl: "combi.proflipp.com",
      details: "Booking details:",
      name: "Name",
      email: "Email",
      phone: "Phone",
      departure: "Departure date",
      arrival: "Return date",
      passengers: "Number of passengers",
      message: "Message",
      regards: "Best regards",
      team: "TEAM PROFLIPP",
    },
    DE: {
      subject: "Buchungsbestätigung - PROFLIPP KOMBI",
      greeting: `Sehr geehrte/r ${escapeHtml(data.firstName)}`,
      thankYou: "vielen Dank für Ihre PROFLIPP KOMBI Reservierung – der erste Schritt zu einem neuen Abenteuer ist gemacht 🚐✨",
      received: "Wir haben Ihre Anfrage erhalten und werden Sie so schnell wie möglich (innerhalb von 24 Stunden) kontaktieren, um Ihre Buchung zu bestätigen und alle weiteren Informationen zu geben.",
      visitSite: "In der Zwischenzeit laden wir Sie ein, weitere Details anzusehen auf",
      siteUrl: "combi.proflipp.com",
      details: "Buchungsdetails:",
      name: "Name",
      email: "E-Mail",
      phone: "Telefon",
      departure: "Abreisedatum",
      arrival: "Rückgabedatum",
      passengers: "Anzahl der Passagiere",
      message: "Nachricht",
      regards: "Mit freundlichen Grüßen",
      team: "TEAM PROFLIPP",
    },
    HR: {
      subject: "Potvrda rezervacije - PROFLIPP KOMBI",
      greeting: `Poštovani ${escapeHtml(data.firstName)}`,
      thankYou: "hvala na vašoj rezervaciji PROFLIPP KOMBI – prvi korak prema novoj avanturi je napravljen 🚐✨",
      received: "Primili smo vaš zahtjev i kontaktirat ćemo vas u najkraćem mogućem roku (do 24 sata) za potvrdu rezervacije i sve daljnje informacije.",
      visitSite: "Do tada vas pozivamo da pogledate dodatne pojedinosti na",
      siteUrl: "combi.proflipp.com",
      details: "Pojedinosti rezervacije:",
      name: "Ime i prezime",
      email: "E-pošta",
      phone: "Telefon",
      departure: "Datum polaska",
      arrival: "Datum povratka",
      passengers: "Broj putnika",
      message: "Poruka",
      regards: "Lijep pozdrav",
      team: "TEAM PROFLIPP",
    },
  };

  const t = translations[data.lang];

  return {
    subject: t.subject,
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(135deg, #0A1628 0%, #1E3A5F 100%); padding: 30px; text-align: center; border-radius: 12px 12px 0 0;">
    <h1 style="color: white; margin: 0; font-size: 24px;">PROFLIPP <span style="color: #F5A623;">KOMBI</span></h1>
  </div>
  
  <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 12px 12px;">
    <p style="font-size: 16px; color: #1E3A5F; margin-top: 0;"><strong>${t.greeting},</strong></p>
    
    <p style="font-size: 16px;">${t.thankYou}</p>
    <p>${t.received}</p>
    
    <p>${t.visitSite} <a href="https://combi.proflipp.com" style="color: #1E3A5F; font-weight: bold;">${t.siteUrl}</a>.</p>
    
    <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #F5A623;">
      <h3 style="color: #0A1628; margin-top: 0;">📋 ${t.details}</h3>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px 0; color: #666;">${t.name}:</td>
          <td style="padding: 8px 0; font-weight: bold;">${escapeHtml(data.firstName)} ${escapeHtml(data.lastName)}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #666;">${t.email}:</td>
          <td style="padding: 8px 0;">${escapeHtml(data.email)}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #666;">${t.phone}:</td>
          <td style="padding: 8px 0;">${escapeHtml(data.phone)}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #666;">${t.departure}:</td>
          <td style="padding: 8px 0;">${escapeHtml(data.departureDate)}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #666;">${t.arrival}:</td>
          <td style="padding: 8px 0;">${escapeHtml(data.arrivalDate)}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #666;">${t.passengers}:</td>
          <td style="padding: 8px 0;">${escapeHtml(data.passengers)}</td>
        </tr>
        ${data.message ? `
        <tr>
          <td style="padding: 8px 0; color: #666;">${t.message}:</td>
          <td style="padding: 8px 0;">${escapeHtml(data.message)}</td>
        </tr>
        ` : ""}
      </table>
    </div>
    
    <p style="margin-top: 30px;">
      ${t.regards},<br>
      <strong>${t.team}</strong> 🚐
    </p>
  </div>
  
  <div style="text-align: center; padding: 20px; color: #999; font-size: 12px;">
    <p>TRAVEL · ENJOY · EXPLORE</p>
    <p>© ${new Date().getFullYear()} PROFLIPP KOMBI</p>
  </div>
</body>
</html>
    `,
  };
};

const getNotificationEmail = (data: BookingRequest) => {
  // Sanitize phone for WhatsApp link (only numbers)
  const sanitizedPhone = data.phone.replace(/[^0-9+]/g, "");
  
  return {
    subject: `Nova rezervacija: ${escapeHtml(data.firstName)} ${escapeHtml(data.lastName)}`,
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <h1 style="color: #0A1628; border-bottom: 2px solid #F5A623; padding-bottom: 10px;">🚐 Nova rezervacija!</h1>
  
  <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
    <h2 style="margin-top: 0;">Kontaktni podatki:</h2>
    <p><strong>Ime:</strong> ${escapeHtml(data.firstName)} ${escapeHtml(data.lastName)}</p>
    <p><strong>E-pošta:</strong> <a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></p>
    <p><strong>Telefon:</strong> <a href="tel:${escapeHtml(data.phone)}">${escapeHtml(data.phone)}</a></p>
  </div>
  
  <div style="background: #e8f4fd; padding: 20px; border-radius: 8px; margin: 20px 0;">
    <h2 style="margin-top: 0;">Podrobnosti rezervacije:</h2>
    <p><strong>Datum odhoda:</strong> ${escapeHtml(data.departureDate)}</p>
    <p><strong>Datum prihoda:</strong> ${escapeHtml(data.arrivalDate)}</p>
    <p><strong>Število potnikov:</strong> ${escapeHtml(data.passengers)}</p>
    ${data.message ? `<p><strong>Sporočilo:</strong> ${escapeHtml(data.message)}</p>` : ""}
  </div>
  
  <div style="margin-top: 20px; padding: 15px; background: #FFF3CD; border-radius: 8px;">
    <p style="margin: 0;"><strong>⚡ Hitri odgovor:</strong></p>
    <p style="margin: 5px 0;">
      <a href="mailto:${escapeHtml(data.email)}?subject=Re: Rezervacija PROFLIPP KOMBI" style="color: #0A1628;">Odgovori po e-pošti</a> |
      <a href="https://wa.me/${sanitizedPhone}" style="color: #0A1628;">Odpri WhatsApp</a>
    </p>
  </div>
  
  <p style="color: #999; font-size: 12px; margin-top: 30px;">
    Prejeto: ${new Date().toLocaleString("sl-SI")} | Jezik: ${data.lang}
  </p>
</body>
</html>
    `,
  };
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return new Response(
        JSON.stringify({ 
          error: "Service temporarily unavailable. Please contact us directly at info@proflipp.com",
          code: "SERVICE_UNAVAILABLE"
        }),
        { status: 503, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const resend = new Resend(RESEND_API_KEY);
    const rawData = await req.json();

    // Validate input data with Zod
    const parseResult = BookingSchema.safeParse(rawData);
    
    if (!parseResult.success) {
      console.error("Validation failed:", parseResult.error.errors);
      return new Response(
        JSON.stringify({ 
          error: "Please fill in all required fields correctly.",
          code: "VALIDATION_ERROR"
        }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const data = parseResult.data;

    // Honeypot check - if filled, silently ignore (bot detected)
    if (data.company && data.company.trim() !== "") {
      console.warn("Honeypot triggered - bot detected");
      // Return success to not reveal detection to bots
      return new Response(
        JSON.stringify({ 
          success: true,
          message: "Booking request submitted successfully"
        }),
        { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Get client IP from headers (Supabase Edge Functions provide this)
    const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
      || req.headers.get("cf-connecting-ip") 
      || req.headers.get("x-real-ip") 
      || "unknown";

    // Check rate limits before processing
    const rateLimitResult = await checkRateLimit(clientIp, data.email);
    if (!rateLimitResult.allowed) {
      console.warn("Rate limit exceeded:", { ip: maskIp(clientIp), email: maskEmail(data.email) });
      return new Response(
        JSON.stringify({ 
          error: rateLimitResult.reason || "Too many requests. Please try again later.",
          code: "RATE_LIMITED"
        }),
        { status: 429, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    console.log("Processing booking request:", {
      name: `${data.firstName.charAt(0)}***`,
      email: maskEmail(data.email),
      dates: `${data.departureDate} - ${data.arrivalDate}`,
      ip: maskIp(clientIp),
      lang: data.lang,
      timestamp: new Date().toISOString(),
    });

    // Log submission for rate limiting (before sending emails)
    await logSubmission(clientIp, data.email);

    // Send notification email to business
    const notificationEmail = getNotificationEmail(data);
    const notificationResult = await resend.emails.send({
      from: "PROFLIPP KOMBI <noreply@proflipp.com>",
      to: ["info@proflipp.com"],
      subject: notificationEmail.subject,
      html: notificationEmail.html,
      reply_to: data.email,
    });

    if (notificationResult.error) {
      console.error("Failed to send notification email:", notificationResult.error);
    } else {
      console.log("Notification email sent successfully, id:", notificationResult.data?.id);
    }

    console.log("Notification email sent successfully");

    // Send confirmation email to customer
    const confirmationEmail = getConfirmationEmail(data);
    const confirmationResult = await resend.emails.send({
      from: "PROFLIPP KOMBI <noreply@proflipp.com>",
      to: [data.email],
      subject: confirmationEmail.subject,
      html: confirmationEmail.html,
    });

    if (confirmationResult.error) {
      console.error("Failed to send confirmation email:", confirmationResult.error);
    } else {
      console.log("Confirmation email sent successfully, id:", confirmationResult.data?.id);
    }

    return new Response(
      JSON.stringify({ 
        success: true,
        message: "Booking request submitted successfully"
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: unknown) {
    // Log detailed error server-side for debugging
    console.error("Booking submission error:", {
      message: error instanceof Error ? error.message : "Unknown error",
      stack: error instanceof Error ? error.stack : undefined,
      timestamp: new Date().toISOString(),
    });

    // Return safe, generic message to client
    return new Response(
      JSON.stringify({ 
        error: "An error occurred while processing your booking. Please try again later or contact us directly.",
        code: "BOOKING_ERROR"
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
