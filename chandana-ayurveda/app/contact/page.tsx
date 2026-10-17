import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { Clock, Mail, Phone, Pin, Whatsapp } from "@/components/Icons";
import { directions, mapsDirectionsUrl, mapsEmbedUrl, site, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us | Chandana Ayurveda",
  description: "Address, phone, email, opening hours, map and directions for Chandana Ayurveda Hospital.",
};

const linkClass = "text-sm text-forest underline decoration-gold underline-offset-8 hover:decoration-forest";

export default function ContactPage() {
  const cards = [
    {
      icon: Pin,
      title: "Visit us",
      body: site.addressLines.join(", "),
      action: { label: "Get directions →", href: mapsDirectionsUrl, external: true },
    },
    {
      icon: Phone,
      title: "Call us",
      body: site.phone,
      action: { label: "Call now →", href: site.phoneHref, external: false },
    },
    ...(whatsappUrl
      ? [
          {
            icon: Whatsapp,
            title: "WhatsApp",
            body: "Message us any time — we reply during opening hours.",
            action: { label: "Start a chat →", href: whatsappUrl, external: true },
          },
        ]
      : []),
    {
      icon: Mail,
      title: "Email us",
      body: site.email,
      action: { label: "Send an email →", href: `mailto:${site.email}`, external: false },
    },
  ];

  // Structured data so search engines and Google Maps can show the hospital's details
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: site.name,
    medicalSpecialty: "Ayurveda",
    telephone: site.phone,
    email: site.email,
    address: site.addressLines.join(", "),
  };

  return (
    <>
      <Header />
      <main className="flex-1">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        <section className="mx-auto max-w-6xl px-6 pb-16 pt-10 md:pt-20">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-deep">Contact Us</p>
          <h1 className="mt-6 font-serif text-4xl leading-[1.1] text-forest sm:text-5xl md:text-6xl">We’re here to help</h1>
          <p className="mt-6 max-w-xl leading-relaxed text-muted">
            Call, message or visit us — our team will gladly answer your questions and help you plan your
            treatment.
          </p>

          <ul className={`mt-14 grid gap-4 sm:grid-cols-2 ${cards.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
            {cards.map(({ icon: Icon, title, body, action }, i) => (
              <li key={title}>
                <Reveal delay={i * 100} className="flex h-full flex-col rounded-2xl bg-linen p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-forest text-gold">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h2 className="mt-6 font-serif text-2xl text-forest">{title}</h2>
                  <p className="mt-2 flex-1 break-words text-sm leading-relaxed text-muted">{body}</p>
                  <a
                    href={action.href}
                    {...(action.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className={`mt-6 self-start ${linkClass}`}
                  >
                    {action.label}
                  </a>
                </Reveal>
              </li>
            ))}
          </ul>
        </section>

        <section className="border-t border-black/5 py-20">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_2fr]">
            <Reveal>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-gold-deep" />
                <h2 className="font-serif text-3xl text-forest">Opening hours</h2>
              </div>
              <dl className="mt-8 divide-y divide-black/10 border-y border-black/10">
                {site.hoursDetail.map((h) => (
                  <div key={h.days} className="flex justify-between gap-6 py-4 text-sm">
                    <dt className="text-muted">{h.days}</dt>
                    <dd className={h.time === "Closed" ? "text-gold-deep" : "text-forest"}>{h.time}</dd>
                  </div>
                ))}
              </dl>

              <h2 className="mt-14 font-serif text-3xl text-forest">Address</h2>
              <address className="mt-4 text-sm not-italic leading-relaxed text-muted">
                {site.addressLines.map((line) => (
                  <span key={line} className="block">{line}</span>
                ))}
              </address>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-forest px-6 py-3 text-sm text-white transition-colors hover:bg-sage"
                >
                  Get directions
                </a>
                {whatsappUrl && (
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-forest px-6 py-3 text-sm text-forest transition-colors hover:bg-forest hover:text-white"
                  >
                    WhatsApp us
                  </a>
                )}
              </div>
            </Reveal>

            <Reveal delay={120} className="overflow-hidden rounded-2xl border border-black/5 bg-linen">
              <iframe
                src={mapsEmbedUrl}
                title={`Map showing ${site.name}`}
                className="block h-[360px] w-full sm:h-[460px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </Reveal>
          </div>
        </section>

        {directions.length > 0 && (
          <section className="border-t border-black/5 py-20">
            <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1fr_2fr]">
              <h2 className="font-serif text-3xl text-forest">How to reach us</h2>
              <dl className="divide-y divide-black/10 border-y border-black/10">
                {directions.map((d) => (
                  <div key={d.mode} className="grid gap-2 py-5 sm:grid-cols-[10rem_1fr]">
                    <dt className="text-xs uppercase tracking-[0.2em] text-gold-deep">{d.mode}</dt>
                    <dd className="text-sm leading-relaxed text-muted">{d.text}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>
        )}

        <section className="bg-forest py-16">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6">
            <h2 className="font-serif text-3xl text-white md:text-4xl">Ready to begin your treatment?</h2>
            <Link
              href="/#contact"
              className="rounded-full bg-gold px-8 py-3.5 text-sm tracking-wide text-forest transition-colors hover:bg-white"
            >
              Book an appointment
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
