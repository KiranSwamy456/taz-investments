import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const EMAIL_RE = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const MAX_PDF_BYTES = 5 * 1024 * 1024;

function asString(value: FormDataEntryValue | null) {
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

function isPdfFile(file: File) {
  const name = file.name.toLowerCase();
  return file.type === "application/pdf" || name.endsWith(".pdf");
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

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ error: "Invalid form submission." }, { status: 400 });
  }

  const name = asString(form.get("name"));
  const email = asString(form.get("email")).toLowerCase();
  const company = asString(form.get("company"));
  const stage = asString(form.get("stage"));
  const link = asString(form.get("link"));
  const message = asString(form.get("message"));
  const source = asString(form.get("source")) || "Website raise form";
  const deckEntry = form.get("deck");
  const deck = deckEntry instanceof File && deckEntry.size > 0 ? deckEntry : null;

  if (!name || !email || !company || !stage || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  if (deck) {
    if (!isPdfFile(deck)) {
      return NextResponse.json({ error: "Please upload a PDF file only." }, { status: 400 });
    }
    if (deck.size > MAX_PDF_BYTES) {
      return NextResponse.json({ error: "PDF must be 5MB or smaller." }, { status: 400 });
    }
  }

  const attachments = deck
    ? [
        {
          filename: deck.name.replace(/[^\w.\- ()]/g, "_") || "pitch-deck.pdf",
          content: Buffer.from(await deck.arrayBuffer()),
          contentType: "application/pdf",
        },
      ]
    : undefined;

  const resend = new Resend(apiKey);
  const subject = `New raise inquiry: ${company} (${stage})`;
  const safeName = name.replace(/[<>"]/g, "").trim() || "Applicant";

  const { error } = await resend.emails.send({
    from: `TIC Raise Form <${fromEmail}>`,
    to: [toEmail],
    replyTo: [`${safeName} <${email}>`],
    subject,
    attachments,
    text: [
      `New raise inquiry from the website`,
      ``,
      `Source: ${source}`,
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company}`,
      `Stage: ${stage}`,
      `Website / deck: ${link || "—"}`,
      `PDF attached: ${deck ? deck.name : "No"}`,
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
      <p><strong>PDF attached:</strong> ${deck ? escapeHtml(deck.name) : "No"}</p>
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
