import { NextResponse } from "next/server";

/**
 * RFQ intake → GoHighLevel inbound webhook.
 * The webhook URL is a SERVER-side env var (never exposed to the client).
 * If unset (local/preview), we log and return ok so the form still works.
 *
 * NOTE: file BINARIES are not forwarded here — only the file name is captured.
 * Wiring real drawing uploads (GHL media / object storage + URL in payload) is a
 * follow-up documented in PROJECT_STATUS.md.
 */
export async function POST(request: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 });
  }

  // Minimal server-side validation (defence in depth).
  const email = String(payload.email ?? "");
  const company = String(payload.company ?? "");
  if (!company.trim() || !/.+@.+\..+/.test(email)) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 422 });
  }

  const webhook = process.env.GHL_WEBHOOK_URL;
  if (!webhook) {
    // Demo mode — no webhook configured yet.
    console.info("[RFQ] No GHL_WEBHOOK_URL set — logging submission:", {
      company,
      email,
      processes: payload.processes,
    });
    return NextResponse.json({ ok: true, demo: true });
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source: "foxtron-website-rfq", ...payload }),
    });
    if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[RFQ] Webhook forward failed:", err);
    return NextResponse.json({ ok: false, error: "Upstream failed" }, { status: 502 });
  }
}
