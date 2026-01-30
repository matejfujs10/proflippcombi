import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface BookingRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  departureDate: string;
  arrivalDate: string;
  passengers: string;
  message?: string;
  lang: "SL" | "EN" | "DE";
}

const getConfirmationEmail = (data: BookingRequest) => {
  const translations = {
    SL: {
      subject: "Potrditev rezervacije - PROFLIPP KOMBI",
      greeting: `Pozdravljeni ${data.firstName}`,
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
      greeting: `Hello ${data.firstName}`,
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
      greeting: `Hallo ${data.firstName}`,
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
          <td style="padding: 8px 0; font-weight: bold;">${data.firstName} ${data.lastName}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #666;">${t.email}:</td>
          <td style="padding: 8px 0;">${data.email}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #666;">${t.phone}:</td>
          <td style="padding: 8px 0;">${data.phone}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #666;">${t.departure}:</td>
          <td style="padding: 8px 0;">${data.departureDate}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #666;">${t.arrival}:</td>
          <td style="padding: 8px 0;">${data.arrivalDate}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #666;">${t.passengers}:</td>
          <td style="padding: 8px 0;">${data.passengers}</td>
        </tr>
        ${data.message ? `
        <tr>
          <td style="padding: 8px 0; color: #666;">${t.message}:</td>
          <td style="padding: 8px 0;">${data.message}</td>
        </tr>
        ` : ''}
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
  return {
    subject: `Nova rezervacija: ${data.firstName} ${data.lastName}`,
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
    <p><strong>Ime:</strong> ${data.firstName} ${data.lastName}</p>
    <p><strong>E-pošta:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
    <p><strong>Telefon:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>
  </div>
  
  <div style="background: #e8f4fd; padding: 20px; border-radius: 8px; margin: 20px 0;">
    <h2 style="margin-top: 0;">Podrobnosti rezervacije:</h2>
    <p><strong>Datum odhoda:</strong> ${data.departureDate}</p>
    <p><strong>Datum prihoda:</strong> ${data.arrivalDate}</p>
    <p><strong>Število potnikov:</strong> ${data.passengers}</p>
    ${data.message ? `<p><strong>Sporočilo:</strong> ${data.message}</p>` : ''}
  </div>
  
  <div style="margin-top: 20px; padding: 15px; background: #FFF3CD; border-radius: 8px;">
    <p style="margin: 0;"><strong>⚡ Hitri odgovor:</strong></p>
    <p style="margin: 5px 0;">
      <a href="mailto:${data.email}?subject=Re: Rezervacija PROFLIPP KOMBI" style="color: #0A1628;">Odgovori po e-pošti</a> |
      <a href="https://wa.me/${data.phone.replace(/[^0-9]/g, '')}" style="color: #0A1628;">Odpri WhatsApp</a>
    </p>
  </div>
  
  <p style="color: #999; font-size: 12px; margin-top: 30px;">
    Prejeto: ${new Date().toLocaleString('sl-SI')} | Jezik: ${data.lang}
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
      throw new Error("RESEND_API_KEY is not configured");
    }

    const resend = new Resend(RESEND_API_KEY);
    const data: BookingRequest = await req.json();

    // Validate required fields
    if (!data.firstName || !data.lastName || !data.email || !data.phone || !data.departureDate || !data.arrivalDate || !data.passengers) {
      throw new Error("Missing required fields");
    }

    console.log("Processing booking request:", {
      name: `${data.firstName} ${data.lastName}`,
      email: data.email,
      dates: `${data.departureDate} - ${data.arrivalDate}`,
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

    console.log("Notification email sent:", notificationResponse);

    // Send confirmation email to customer
    const confirmationEmail = getConfirmationEmail(data);
    const confirmationResponse = await resend.emails.send({
      from: "PROFLIPP KOMBI <onboarding@resend.dev>",
      to: [data.email],
      subject: confirmationEmail.subject,
      html: confirmationEmail.html,
    });

    console.log("Confirmation email sent:", confirmationResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        notification: notificationResponse,
        confirmation: confirmationResponse,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-booking function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
