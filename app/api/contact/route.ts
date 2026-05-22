import { NextResponse } from "next/server";
import { emailIsConfigured, sendContactEmail } from "@/lib/email";
import { site } from "@/lib/site-data";

type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

function isEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  // Production note:
  // Replace this endpoint with an email provider (Resend/SES) or a CRM webhook.
  // Keep validation server-side to protect your inbox and maintain data quality.
  const body = (await req.json().catch(() => null)) as Partial<ContactPayload> | null;
  if (!body) return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const message = (body.message ?? "").trim();

  if (name.length < 2) return NextResponse.json({ error: "Name is too short" }, { status: 400 });
  if (!isEmail(email)) return NextResponse.json({ error: "Email is invalid" }, { status: 400 });
  if (message.length < 10)
    return NextResponse.json({ error: "Message is too short" }, { status: 400 });

  if (!emailIsConfigured()) {
    const subject = encodeURIComponent(`Portfolio Contact: ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`);
    const mailto = `${site.emailHref}?subject=${subject}&body=${body}`;
    return NextResponse.json(
      {
        error:
          "Email is not configured on the server. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO_EMAIL (and optional CONTACT_FROM_EMAIL).",
        mailto,
      },
      { status: 501 },
    );
  }

  try {
    await sendContactEmail({
      subject: `Portfolio Contact: ${name}`,
      replyTo: email,
      text: `New portfolio contact message\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to send email";
    return NextResponse.json({ error: message }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
