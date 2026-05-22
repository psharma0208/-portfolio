import nodemailer from "nodemailer";

type MailInput = {
  subject: string;
  text: string;
  replyTo?: string;
};

function getEnv(name: string) {
  const v = process.env[name];
  return v && v.trim().length > 0 ? v.trim() : null;
}

function getAnyEnv(names: string[]) {
  for (const n of names) {
    const v = getEnv(n);
    if (v) return v;
  }
  return null;
}

export function emailIsConfigured() {
  return Boolean(
    getAnyEnv(["SMTP_HOST", "EMAIL_HOST"]) &&
      getAnyEnv(["SMTP_PORT", "EMAIL_PORT"]) &&
      getAnyEnv(["SMTP_USER", "EMAIL_USER"]) &&
      getAnyEnv(["SMTP_PASS", "EMAIL_PASS"]) &&
      getAnyEnv(["CONTACT_TO_EMAIL", "EMAIL_TO"]),
  );
}

export async function sendContactEmail(input: MailInput) {
  // Support both `SMTP_*` (recommended) and `EMAIL_*` (common naming) env vars.
  const host = getAnyEnv(["SMTP_HOST", "EMAIL_HOST"]);
  const portStr = getAnyEnv(["SMTP_PORT", "EMAIL_PORT"]);
  const user = getAnyEnv(["SMTP_USER", "EMAIL_USER"]);
  const pass = getAnyEnv(["SMTP_PASS", "EMAIL_PASS"]);
  const to = getAnyEnv(["CONTACT_TO_EMAIL", "EMAIL_TO"]);

  if (!host || !portStr || !user || !pass || !to) {
    throw new Error("Email is not configured. Set SMTP_* and CONTACT_TO_EMAIL env vars.");
  }

  const port = Number(portStr);
  if (!Number.isFinite(port) || port <= 0) throw new Error("SMTP_PORT must be a valid number.");

  // `from` should generally be the authenticated mailbox, otherwise many SMTP providers reject it.
  const from = getAnyEnv(["CONTACT_FROM_EMAIL", "EMAIL_FROM"]) ?? user;

  const transporter = nodemailer.createTransport({
    host,
    port,
    // 465 = implicit TLS, 587 = STARTTLS.
    secure: port === 465,
    auth: { user, pass },
  });

  await transporter.sendMail({
    to,
    from,
    subject: input.subject,
    text: input.text,
    replyTo: input.replyTo,
  });
}
