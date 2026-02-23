import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const { name, email, phone, city, service_interest, budget_range, project_details } = body;

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      return new Response(JSON.stringify({ error: "Missing RESEND_API_KEY" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0f0f0f; color: #ffffff; padding: 32px; border-radius: 12px; border: 1px solid #333;">
        <div style="text-align: center; margin-bottom: 32px;">
          <h1 style="color: #e11d48; font-size: 28px; margin: 0;">New Lead from Fivsys</h1>
          <p style="color: #94a3b8; margin: 8px 0 0;">A new project enquiry has been submitted</p>
        </div>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 12px 16px; background: #1a1a1a; border-radius: 8px 8px 0 0; border-bottom: 1px solid #2a2a2a;">
              <span style="color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Name</span><br/>
              <span style="color: #ffffff; font-size: 16px; font-weight: bold;">${name ?? '—'}</span>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 16px; background: #1a1a1a; border-bottom: 1px solid #2a2a2a;">
              <span style="color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</span><br/>
              <span style="color: #e11d48; font-size: 16px;">${email ?? '—'}</span>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 16px; background: #1a1a1a; border-bottom: 1px solid #2a2a2a;">
              <span style="color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Phone</span><br/>
              <span style="color: #ffffff; font-size: 16px;">${phone || '—'}</span>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 16px; background: #1a1a1a; border-bottom: 1px solid #2a2a2a;">
              <span style="color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">City</span><br/>
              <span style="color: #ffffff; font-size: 16px;">${city ?? '—'}</span>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 16px; background: #1a1a1a; border-bottom: 1px solid #2a2a2a;">
              <span style="color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Service Interest</span><br/>
              <span style="color: #ffffff; font-size: 16px;">${service_interest ?? '—'}</span>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 16px; background: #1a1a1a; border-bottom: 1px solid #2a2a2a;">
              <span style="color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Budget Range</span><br/>
              <span style="color: #ffffff; font-size: 16px;">${budget_range ?? '—'}</span>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 16px; background: #1a1a1a; border-radius: 0 0 8px 8px;">
              <span style="color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Project Details</span><br/>
              <span style="color: #ffffff; font-size: 15px; line-height: 1.6;">${project_details ?? '—'}</span>
            </td>
          </tr>
        </table>
        <div style="text-align: center; margin-top: 32px; padding-top: 24px; border-top: 1px solid #2a2a2a;">
          <p style="color: #64748b; font-size: 12px; margin: 0;">This email was sent from the Fivsys website contact form</p>
        </div>
      </div>
    `;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Fivsys Leads <onboarding@resend.dev>",
        to: ["teamfivsys@gmail.com"],
        subject: `New Lead: ${name} — ${service_interest}`,
        html: htmlBody,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      return new Response(JSON.stringify({ error: err }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
