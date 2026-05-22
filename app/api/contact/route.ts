import { NextResponse } from "next/server";

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

  // Fake latency for nicer UI feedback.
  await new Promise((r) => setTimeout(r, 350));

  return NextResponse.json({ ok: true });
}

