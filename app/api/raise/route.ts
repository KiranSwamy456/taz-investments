import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type RaisePayload = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  stage?: unknown;
  link?: unknown;
  message?: unknown;
  source?: unknown;
};

const EMAIL_RE = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.RAISE_TO_EMAIL;
  const fromEmail = process.env.RAISE_FROM_EMAIL || "onboarding@resend.dev";

  if (!apiKey || !toEmail) {
    return NextResponse.json(
      { error: "Email is not configured on the server." },
      { status: 500 },
    );
  }

  let body: RaisePayload;
  try {
    body = (await request.json()) as RaisePayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = asString(body.name);
  const email = asString(body.email).toLowerCase();
  const company = asString(body.company);
  const stage = asString(body.stage);
  const link = asString(body.link);
  const message = asString(body.message);
  const source = asString(body.source) || "Website raise form";

  if (!name || !email || !company || !stage || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const resend = new Resend(apiKey);
  const subject = `New raise inquiry: ${company} (${stage})`;
  const safeName = name.replace(/[<>"]/g, "").trim() || "Applicant";

  const { error } = await resend.emails.send({
    from: `TIC Raise Form <${fromEmail}>`,
    to: [toEmail],
    replyTo: [`${safeName} <${email}>`],
    subject,
    text: [
      `New raise inquiry from the website`,
      ``,
      `Source: ${source}`,
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company}`,
      `Stage: ${stage}`,
      `Website / deck: ${link || "—"}`,
      ``,
      `Message:`,
      message,
    ].join("\n"),
    html: `
      <h2>New raise inquiry</h2>
      <p><strong>Source:</strong> ${escapeHtml(source)}</p>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Company:</strong> ${escapeHtml(company)}</p>
      <p><strong>Stage:</strong> ${escapeHtml(stage)}</p>
      <p><strong>Website / deck:</strong> ${link ? escapeHtml(link) : "—"}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send email." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
