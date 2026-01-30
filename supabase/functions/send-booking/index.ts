import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

// Input validation schema
const BookingSchema = z.object({
  firstName: z.string().min(1).max(50).regex(/^[a-zA-ZÀ-žčšžČŠŽ\s-]+$/, "Invalid characters in first name"),
  lastName: z.string().min(1).max(50).regex(/^[a-zA-ZÀ-žčšžČŠŽ\s-]+$/, "Invalid characters in last name"),
  email: z.string().email("Invalid email format").max(100),
  phone: z.string().regex(/^\+?[0-9\s()-]{7,20}$/, "Invalid phone format"),
  departureDate: z.string().min(1).max(100),
  arrivalDate: z.string().min(1).max(100),
  passengers: z.string().regex(/^[1-5]$/, "Passengers must be 1-5"),
  message: z.string().max(1000).optional().default(""),
  lang: z.enum(["SL", "EN", "DE"]),
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
      greeting: `Pozdravljeni ${escapeHtml(data.firstName)}`,
      thankYou: "Hvala za vaše povpraševanje!",
      received: "Vaša rezervacija je bila uspešno prejeta. Odgovorili vam bomo v najkrajšem možnem času.",
      details: "Podrobnosti rezervacije:",
      name: "Ime in priimek",
      email: "E-pošta",
      phone: "Telefon",
      departure: "Datum odhoda",
      arrival: "Datum prihoda",
      passengers: "Število potnikov",
      message: "Sporočilo",
      contact: "V primeru vprašanj nas kontaktirajte:",
      regards: "Lep pozdrav",
      team: "Ekipa PROFLIPP KOMBI",
    },
    EN: {
      subject: "Booking Confirmation - PROFLIPP KOMBI",
      greeting: `Hello ${escapeHtml(data.firstName)}`,
      thankYou: "Thank you for your inquiry!",
      received: "Your booking request has been successfully received. We will respond as soon as possible.",
      details: "Booking details:",
      name: "Name",
      email: "Email",
      phone: "Phone",
      departure: "Departure date",
      arrival: "Return date",
      passengers: "Number of passengers",
      message: "Message",
      contact: "For questions, contact us:",
      regards: "Best regards",
      team: "PROFLIPP KOMBI Team",
    },
    DE: {
      subject: "Buchungsbestätigung - PROFLIPP KOMBI",
      greeting: `Hallo ${escapeHtml(data.firstName)}`,
      thankYou: "Vielen Dank für Ihre Anfrage!",
      received: "Ihre Buchungsanfrage wurde erfolgreich empfangen. Wir werden so schnell wie möglich antworten.",
      details: "Buchungsdetails:",
      name: "Name",
      email: "E-Mail",
      phone: "Telefon",
      departure: "Abreisedatum",
      arrival: "Rückgabedatum",
      passengers: "Anzahl der Passagiere",
      message: "Nachricht",
      contact: "Bei Fragen kontaktieren Sie uns:",
      regards: "Mit freundlichen Grüßen",
      team: "PROFLIPP KOMBI Team",
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
    <h2 style="color: #0A1628; margin-top: 0;">${t.greeting}! 👋</h2>
    
    <p style="font-size: 16px; color: #1E3A5F;"><strong>${t.thankYou}</strong></p>
    <p>${t.received}</p>
    
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
    
    <p>${t.contact}</p>
    <p>
      📧 <a href="mailto:info@proflipp.com" style="color: #1E3A5F;">info@proflipp.com</a><br>
      📞 <a href="tel:+38668169430" style="color: #1E3A5F;">+386 68 169 430</a>
    </p>
    
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

    console.log("Processing booking request:", {
      name: `${data.firstName} ${data.lastName}`,
      email: data.email,
      dates: `${data.departureDate} - ${data.arrivalDate}`,
      timestamp: new Date().toISOString(),
    });

    // Send notification email to business
    const notificationEmail = getNotificationEmail(data);
    const notificationResponse = await resend.emails.send({
      from: "PROFLIPP KOMBI <onboarding@resend.dev>",
      to: ["info@proflipp.com"],
      subject: notificationEmail.subject,
      html: notificationEmail.html,
      reply_to: data.email,
    });

    console.log("Notification email sent successfully");

    // Send confirmation email to customer
    const confirmationEmail = getConfirmationEmail(data);
    const confirmationResponse = await resend.emails.send({
      from: "PROFLIPP KOMBI <onboarding@resend.dev>",
      to: [data.email],
      subject: confirmationEmail.subject,
      html: confirmationEmail.html,
    });

    console.log("Confirmation email sent successfully");

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
