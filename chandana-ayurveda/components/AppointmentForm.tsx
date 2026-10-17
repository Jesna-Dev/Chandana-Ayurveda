"use client";

import { useState, type FormEvent } from "react";
import {
  consultationTypes,
  services,
  timeSlots,
  validate,
  whatsappBookingUrl,
  type BookingErrors,
  type BookingRequest,
} from "@/lib/booking";
import { site } from "@/lib/site";
import { Whatsapp } from "./Icons";

const field =
  "w-full border-b border-black/15 bg-transparent py-3 text-sm text-forest placeholder:text-muted/70 outline-none transition focus:border-forest aria-[invalid=true]:border-red-700";

function FieldError({ message }: { message?: string }) {
  return message ? <p className="mt-1.5 text-xs text-red-700">{message}</p> : null;
}

function Legend({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <legend className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-gold-deep">
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-forest font-serif text-xs tracking-normal text-white">
        {n}
      </span>
      {children}
    </legend>
  );
}

export default function AppointmentForm() {
  const [errors, setErrors] = useState<BookingErrors>({});
  // WhatsApp link of the last valid request, shown on the confirmation screen
  const [sentUrl, setSentUrl] = useState<string | null>(null);

  function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const data = new FormData(ev.currentTarget);
    const request: BookingRequest = {
      service: String(data.get("service") ?? ""),
      consultationType: String(data.get("consultationType") ?? ""),
      date: String(data.get("date") ?? ""),
      time: String(data.get("time") ?? ""),
      name: String(data.get("name") ?? ""),
      phone: String(data.get("phone") ?? ""),
      email: String(data.get("email") ?? ""),
      message: String(data.get("message") ?? ""),
      consent: data.get("consent") === "on",
    };
    const found = validate(request, new Date().toLocaleDateString("en-CA"));
    setErrors(found);
    if (Object.keys(found).length) return;

    const url = whatsappBookingUrl(request);
    // Open WhatsApp within the click so pop-up blockers allow it; fall back to same-tab navigation
    if (!window.open(url, "_blank", "noopener")) window.location.href = url;
    setSentUrl(url);
  }

  if (sentUrl) {
    return (
      <div className="rounded-2xl bg-background p-8 sm:p-10" role="status">
        <p className="text-xs uppercase tracking-[0.25em] text-gold-deep">Almost done</p>
        <h3 className="mt-4 font-serif text-3xl text-forest">Send the message in WhatsApp</h3>
        <p className="mt-4 leading-relaxed text-muted">
          We’ve opened WhatsApp with your request filled in — just tap <span className="text-forest">Send</span>.
          Our team will reply to confirm your appointment. It is confirmed only once we have replied.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={sentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-forest px-6 py-3 text-sm text-white transition-colors hover:bg-sage"
          >
            Open WhatsApp again
          </a>
          <button onClick={() => setSentUrl(null)} className="text-sm text-muted hover:text-forest">
            Make another request
          </button>
        </div>
      </div>
    );
  }

  const e = errors;
  const hasErrors = Object.keys(errors).length > 0;

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-12">

      <fieldset>
        <Legend n={1}>Service</Legend>
        <label className="sr-only" htmlFor="service">Service</label>
        <select id="service" name="service" defaultValue={services[0]} aria-invalid={!!e.service} className={field}>
          {services.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
        <FieldError message={e.service} />

        <p className="mt-8 text-sm text-muted">Consultation type</p>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          {consultationTypes.map((c, i) => (
            <label
              key={c.value}
              className="cursor-pointer rounded-xl border border-black/10 bg-background/60 p-4 transition-colors hover:border-forest has-[:checked]:border-forest has-[:checked]:bg-forest has-[:checked]:text-white has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-gold"
            >
              <input
                type="radio"
                name="consultationType"
                value={c.value}
                defaultChecked={i === 0}
                className="sr-only"
              />
              <span className="block font-serif text-lg">{c.label}</span>
              <span className="block text-xs opacity-70">{c.hint}</span>
            </label>
          ))}
        </div>
        <FieldError message={e.consultationType} />
      </fieldset>

      <fieldset>
        <Legend n={2}>Preferred date &amp; time</Legend>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="date" className="text-sm text-muted">Date</label>
            <input id="date" name="date" type="date"
              // Earliest date follows the visitor's clock; set on focus to keep the prerendered HTML static
              onFocus={(ev) => (ev.currentTarget.min = new Date().toLocaleDateString("en-CA"))}
              required aria-invalid={!!e.date} className={field} />
            <FieldError message={e.date} />
          </div>
          <div>
            <label htmlFor="time" className="text-sm text-muted">Time</label>
            <select id="time" name="time" defaultValue={timeSlots[0]} aria-invalid={!!e.time} className={field}>
              {timeSlots.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
            <FieldError message={e.time} />
          </div>
        </div>
        <p className="mt-3 text-xs text-muted">{site.hours}. We’ll confirm the exact time on WhatsApp.</p>
      </fieldset>

      <fieldset>
        <Legend n={3}>Your details</Legend>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <input name="name" placeholder="Full name" autoComplete="name" aria-invalid={!!e.name} aria-label="Full name" className={field} />
            <FieldError message={e.name} />
          </div>
          <div>
            <input name="phone" type="tel" placeholder="Phone number" autoComplete="tel" aria-invalid={!!e.phone} aria-label="Phone number" className={field} />
            <FieldError message={e.phone} />
          </div>
          <div className="sm:col-span-2">
            <input name="email" type="email" placeholder="Email (optional)" autoComplete="email" aria-invalid={!!e.email} aria-label="Email" className={field} />
            <FieldError message={e.email} />
          </div>
          <div className="sm:col-span-2">
            <textarea name="message" rows={2} placeholder="Briefly describe your health concern (optional)" aria-label="Message" className={`${field} resize-none`} />
          </div>
        </div>
        <label className="mt-6 flex items-start gap-3 text-sm text-muted">
          <input type="checkbox" name="consent" className="mt-1 h-4 w-4 accent-forest" />
          <span>I agree to be contacted by Chandana Ayurveda on WhatsApp or phone about this request.</span>
        </label>
        <FieldError message={e.consent} />
      </fieldset>

      <div className="flex flex-wrap items-center gap-6">
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-full bg-forest px-8 py-3.5 text-sm tracking-wide text-white transition-colors hover:bg-sage"
        >
          <Whatsapp className="h-4 w-4" />
          Book on WhatsApp
        </button>
        <p className="text-xs text-muted">Opens WhatsApp with your details — the hospital will reply to confirm.</p>
      </div>
      {hasErrors && (
        <p className="text-sm text-red-700" role="alert">Please check the highlighted fields.</p>
      )}
    </form>
  );
}
