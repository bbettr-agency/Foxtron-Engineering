"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Upload, ArrowRight, ArrowLeft, Check, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const PROCESSES = [
  "Laser cutting",
  "CNC bending",
  "CNC punching",
  "Welding & assembly",
  "Machining / finishing",
  "Not sure yet",
];
const MATERIALS = ["Mild steel", "Stainless steel", "Aluminium", "Brass", "Copper", "Other / not sure"];
const QUANTITIES = ["One-off", "2 – 50", "50 – 500", "500+", "Ongoing / production"];

type Step = 0 | 1 | 2;

interface FormState {
  processes: string[];
  description: string;
  material: string;
  quantity: string;
  fileName: string;
  deadline: string;
  industry: string;
  projectType: string;
  name: string;
  company: string;
  email: string;
  phone: string;
}

const initial: FormState = {
  processes: [],
  description: "",
  material: "",
  quantity: "",
  fileName: "",
  deadline: "",
  industry: "",
  projectType: "",
  name: "",
  company: "",
  email: "",
  phone: "",
};

const labelCls = "block text-sm font-medium text-brand-charcoal";
const inputCls =
  "mt-1.5 w-full rounded-xl border border-brand-steel/30 bg-white px-4 py-3 text-brand-ink placeholder:text-brand-steel/60 focus:border-brand-accent focus:outline-none";

export function RfqForm() {
  const router = useRouter();
  const [step, setStep] = useState<Step>(0);
  const [form, setForm] = useState<FormState>(initial);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const set = <K extends keyof FormState>(k: K, v: FormState[K]) => setForm((f) => ({ ...f, [k]: v }));

  const toggleProcess = (p: string) =>
    setForm((f) => ({
      ...f,
      processes: f.processes.includes(p) ? f.processes.filter((x) => x !== p) : [...f.processes, p],
    }));

  const step1Valid = form.processes.length > 0 && form.description.trim().length > 2 && form.quantity;
  const step2Valid = form.deadline.trim().length > 0;
  const step3Valid = form.name.trim() && form.company.trim() && /.+@.+\..+/.test(form.email);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!step3Valid) return;
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/rfq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, submittedAt: new Date().toISOString() }),
      });
      if (!res.ok) throw new Error("Request failed");
      router.push("/thank-you");
    } catch {
      setError("Something went wrong. Please call us on 012 666 9933 or email info@foxtronengineering.co.za.");
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl bg-white p-6 shadow-card ring-1 ring-brand-mist md:p-8">
      {/* progress */}
      <div className="mb-6 flex items-center gap-2" aria-hidden>
        {[0, 1, 2].map((s) => (
          <div
            key={s}
            className={cn("h-1.5 flex-1 rounded-full", s <= step ? "bg-brand-accent" : "bg-brand-mist")}
          />
        ))}
      </div>
      <p className="mb-4 text-sm font-semibold text-brand-steel">Step {step + 1} of 3</p>

      {step === 0 && (
        <div className="space-y-5">
          <div>
            <span className={labelCls}>What do you need? *</span>
            <div className="mt-2 flex flex-wrap gap-2">
              {PROCESSES.map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => toggleProcess(p)}
                  aria-pressed={form.processes.includes(p)}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium ring-1 transition-colors",
                    form.processes.includes(p)
                      ? "bg-brand-accentDark text-white ring-brand-accentDark"
                      : "bg-white text-brand-charcoal ring-brand-steel/30 hover:bg-brand-mist",
                  )}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="description" className={labelCls}>
              Describe your part or project *
            </label>
            <textarea
              id="description"
              rows={3}
              value={form.description}
              onChange={(e) => set("description", e.target.value)}
              className={inputCls}
              placeholder="e.g. 200 × laser-cut and folded 2mm mild steel brackets"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="material" className={labelCls}>
                Material
              </label>
              <select id="material" value={form.material} onChange={(e) => set("material", e.target.value)} className={inputCls}>
                <option value="">Select…</option>
                {MATERIALS.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="quantity" className={labelCls}>
                Quantity *
              </label>
              <select id="quantity" value={form.quantity} onChange={(e) => set("quantity", e.target.value)} className={inputCls}>
                <option value="">Select…</option>
                {QUANTITIES.map((q) => (
                  <option key={q} value={q}>
                    {q}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <span className={labelCls}>Drawing / file (optional)</span>
            <label
              htmlFor="file"
              className="mt-1.5 flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-brand-steel/40 bg-brand-bone px-4 py-3 text-sm text-brand-steel hover:border-brand-accent"
            >
              <Upload size={18} aria-hidden />
              {form.fileName || "Upload DXF, DWG, STEP or PDF"}
            </label>
            <input
              id="file"
              type="file"
              accept=".dxf,.dwg,.step,.stp,.pdf,.png,.jpg,.jpeg,.igs,.iges"
              className="sr-only"
              onChange={(e) => set("fileName", e.target.files?.[0]?.name ?? "")}
            />
            <p className="mt-1 text-xs text-brand-steel">Have a drawing? It helps us quote faster and more accurately.</p>
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="space-y-5">
          <div>
            <label htmlFor="deadline" className={labelCls}>
              When do you need it? *
            </label>
            <input
              id="deadline"
              value={form.deadline}
              onChange={(e) => set("deadline", e.target.value)}
              className={inputCls}
              placeholder="e.g. within 2 weeks / by 30 March"
            />
          </div>
          <div>
            <label htmlFor="industry" className={labelCls}>
              Industry / application
            </label>
            <input
              id="industry"
              value={form.industry}
              onChange={(e) => set("industry", e.target.value)}
              className={inputCls}
              placeholder="e.g. automotive, electrical, OEM"
            />
          </div>
          <fieldset>
            <legend className={labelCls}>Is this for a business or personal project?</legend>
            <div className="mt-2 flex gap-2">
              {["Business / trade", "Personal"].map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => set("projectType", t)}
                  aria-pressed={form.projectType === t}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium ring-1 transition-colors",
                    form.projectType === t
                      ? "bg-brand-primary text-white ring-brand-primary"
                      : "bg-white text-brand-charcoal ring-brand-steel/30 hover:bg-brand-mist",
                  )}
                >
                  {t}
                </button>
              ))}
            </div>
          </fieldset>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className={labelCls}>
                Full name *
              </label>
              <input id="name" value={form.name} onChange={(e) => set("name", e.target.value)} className={inputCls} autoComplete="name" />
            </div>
            <div>
              <label htmlFor="company" className={labelCls}>
                Company *
              </label>
              <input id="company" value={form.company} onChange={(e) => set("company", e.target.value)} className={inputCls} autoComplete="organization" />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="email" className={labelCls}>
                Work email *
              </label>
              <input id="email" type="email" inputMode="email" value={form.email} onChange={(e) => set("email", e.target.value)} className={inputCls} autoComplete="email" />
            </div>
            <div>
              <label htmlFor="phone" className={labelCls}>
                Phone
              </label>
              <input id="phone" type="tel" inputMode="tel" value={form.phone} onChange={(e) => set("phone", e.target.value)} className={inputCls} autoComplete="tel" />
            </div>
          </div>
          <p className="text-xs text-brand-steel">
            By submitting, you agree we may contact you about your enquiry. We respond to every RFQ within 1 business day.
          </p>
          {error && <p className="text-sm text-error">{error}</p>}
        </div>
      )}

      {/* nav */}
      <div className="mt-7 flex items-center justify-between gap-3">
        {step > 0 ? (
          <button
            type="button"
            onClick={() => setStep((s) => (s - 1) as Step)}
            className="inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-brand-primary hover:bg-brand-mist"
          >
            <ArrowLeft size={18} aria-hidden /> Back
          </button>
        ) : (
          <span />
        )}

        {step < 2 ? (
          <button
            type="button"
            onClick={() => setStep((s) => (s + 1) as Step)}
            disabled={(step === 0 && !step1Valid) || (step === 1 && !step2Valid)}
            className="inline-flex min-h-[48px] items-center gap-2 rounded-xl bg-brand-accentDark px-6 py-3 text-sm font-semibold text-white shadow-accent transition-all hover:bg-brand-accent disabled:opacity-50"
          >
            Continue <ArrowRight size={18} aria-hidden />
          </button>
        ) : (
          <button
            type="submit"
            disabled={!step3Valid || submitting}
            className="inline-flex min-h-[48px] items-center gap-2 rounded-xl bg-brand-accentDark px-6 py-3 text-sm font-semibold text-white shadow-accent transition-all hover:bg-brand-accent disabled:opacity-50"
          >
            {submitting ? <Loader2 size={18} className="animate-spin" aria-hidden /> : <Check size={18} aria-hidden />}
            {submitting ? "Sending…" : "Send my RFQ"}
          </button>
        )}
      </div>
    </form>
  );
}
