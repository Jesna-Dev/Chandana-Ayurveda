import Image from "next/image";
import Header from "@/components/Header";
import Link from "next/link";
import AppointmentForm from "@/components/AppointmentForm";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { Badge, Clipboard, HeartHand, Leaf, Stethoscope } from "@/components/Icons";
import {
  accreditations,
  amenities,
  facilities,
  images,
  mapsDirectionsUrl,
  reviewsUrl,
  site,
  testimonials,
  treatments,
  whatsappUrl,
} from "@/lib/site";
import heroImage from "@/public/hero.jpg";

function Label({ children }: { children: React.ReactNode }) {
  return <p className="text-xs uppercase tracking-[0.3em] text-gold-deep">{children}</p>;
}

const reasons = [
  {
    icon: Stethoscope,
    title: "Qualified physicians",
    text: "Every treatment is planned and supervised by qualified Ayurvedic physicians, led by Dr. Siji Joseph — the third generation of our family’s tradition.",
  },
  {
    icon: Clipboard,
    title: "Personalised treatment plans",
    text: "Your plan is built around your constitution, condition and lifestyle — never a one-size-fits-all package.",
  },
  {
    icon: Leaf,
    title: "Authentic Kerala practices",
    text: "Classical therapies and medicines prepared by traditional methods, true to Kerala’s Ayurvedic heritage.",
  },
  {
    icon: HeartHand,
    title: "Attentive patient care",
    text: "Unhurried consultations, clear explanations and close follow-up, from your first visit through aftercare.",
  },
];

const principles = [
  {
    title: "Treating the root cause",
    text: "Ayurveda sees illness as a loss of balance. Rather than only easing symptoms, we look for the underlying cause and work to restore harmony between body, mind and the doshas.",
  },
  {
    title: "Care made for you",
    text: "No two people are alike. Every treatment begins with a detailed consultation — including pulse examination (Nadi Pariksha) and an assessment of your constitution (Prakriti) — so your plan fits you.",
  },
  {
    title: "Rooted in tradition",
    text: "Our therapies follow classical Kerala practice, and our medicines are prepared by time-honoured methods passed down through three generations of our family.",
  },
  {
    title: "You at the centre",
    text: "We take time to listen, explain each step of your treatment, and guide you on diet, daily routine and lifestyle so the benefits last well beyond your stay.",
  },
];

const journey = [
  { step: "Consultation", text: "Meet our physician and share your health history and concerns." },
  { step: "Assessment", text: "Pulse diagnosis and Prakriti analysis to understand your constitution." },
  { step: "Your plan", text: "A personalised programme of therapies, medicines and diet." },
  { step: "Treatment & aftercare", text: "Guided therapies, then advice to sustain your wellbeing at home." },
];

const lineage = [
  {
    gen: "First generation",
    name: "Elikutty’s father",
    text: "Began the family’s practice of Ayurvedic healing.",
  },
  {
    gen: "Second generation",
    name: "The late Elikutty",
    text: "Learned from her father and carried his tradition forward.",
  },
  {
    gen: "Third generation",
    name: "Dr. Siji Joseph",
    text: "Continues the family’s medicine at Chandana Ayurveda today.",
  },
];

export default function Home() {
  const publishedTestimonials = testimonials.filter((t) => t.consent);

  return (
    <>
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative isolate flex h-[calc(100svh-4.5rem)] min-h-[560px] max-h-[860px] items-center overflow-hidden">
          <Image
            src={heroImage}
            alt="Herbal poultices, oils and a dhara pot on a wooden table in a sunlit room"
            fill
            priority
            placeholder="blur"
            sizes="100vw"
            className="-z-10 object-cover object-[60%_center]"
          />
          {/* Gentle warm shade on the left so the glass panel has a calm backdrop */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-forest/40 via-forest/10 to-transparent" />
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="max-w-xl rounded-2xl border border-white/25 bg-white/10 p-6 shadow-[0_8px_40px_rgba(38,61,43,0.25)] backdrop-blur-md sm:p-10 lg:p-12">
              <p className="text-xs uppercase tracking-[0.3em] text-white/85">Kerala Ayurveda Hospital</p>
              <h1 className="mt-5 font-serif text-4xl leading-[1.1] text-white sm:text-5xl lg:text-6xl">
                Heal naturally,
                <br />
                the Ayurvedic way.
              </h1>
              <p className="mt-5 max-w-md leading-relaxed text-white/90">
                Authentic Kerala treatments guided by experienced Vaidyas, for balance of body and mind.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-block rounded-full bg-white px-8 py-3.5 text-sm tracking-wide text-forest transition-colors hover:bg-background"
              >
                Book a visit
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-t border-black/5 py-16 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1fr_2fr]">
            <Label>About</Label>
            <div>
              <p className="font-serif text-2xl leading-snug text-forest sm:text-3xl md:text-4xl">
                Chandana — sandalwood — stands for purity, calm and healing. We bring the classical Kerala
                tradition of Ayurveda to every patient, with care shaped around your constitution.
              </p>
              <Link
                href="/history"
                className="mt-8 inline-block text-sm text-forest underline decoration-gold underline-offset-8 hover:decoration-forest"
              >
                Medicine of Generations — our history →
              </Link>
              <div className="relative mt-12 aspect-[16/9] overflow-hidden">
                <Image
                  src={images.about}
                  alt="Garden retreat with palms and a reflecting pool"
                  fill
                  sizes="(min-width:768px) 66vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section id="approach" className="border-t border-black/5 py-16 sm:py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal className="grid gap-12 md:grid-cols-[1fr_2fr]">
              <Label>Our Approach</Label>
              <div>
                <h2 className="font-serif text-3xl leading-tight text-forest sm:text-4xl md:text-5xl">
                  Healing the person,
                  <br />
                  not just the illness.
                </h2>
                <p className="mt-6 max-w-2xl leading-relaxed text-muted">
                  At Chandana, Ayurveda is not a set of treatments applied to a condition. It is a way of
                  understanding each patient as a whole — their constitution, lifestyle and history — and
                  gently guiding the body back to its natural balance.
                </p>
              </div>
            </Reveal>

            <ul className="mt-10 sm:mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
              {principles.map((p, i) => (
                <li key={p.title}>
                  <Reveal delay={i * 100} className="h-full border-t border-gold pt-6">
                    <span className="font-serif text-lg text-gold-deep">0{i + 1}</span>
                    <h3 className="mt-3 font-serif text-2xl text-forest">{p.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{p.text}</p>
                  </Reveal>
                </li>
              ))}
            </ul>

            <Reveal className="mt-14 sm:mt-20 rounded-2xl bg-linen p-6 sm:p-12">
              <p className="text-xs uppercase tracking-[0.3em] text-gold-deep">Your healing journey</p>
              <ol className="relative mt-10 grid gap-10 md:grid-cols-4 md:gap-6">
                {journey.map((j, i) => (
                  <li key={j.step} className="relative flex gap-5 md:block">
                    {/* Line linking this step to the next (desktop only) */}
                    {i < journey.length - 1 && (
                      <span className="absolute left-8 right-[-24px] top-[15px] hidden h-px bg-gold/60 md:block" aria-hidden />
                    )}
                    <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-forest font-serif text-sm text-white ring-8 ring-linen">
                      {i + 1}
                    </span>
                    <div className="md:mt-6">
                      <h3 className="font-serif text-xl text-forest">{j.step}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{j.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </section>

        {/* Treatments */}
        <section id="treatments" className="bg-forest py-16 sm:py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal className="mx-auto max-w-2xl text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-gold">Treatments</p>
              <h2 className="mt-5 font-serif text-3xl text-white sm:text-4xl md:text-5xl">Classical Ayurvedic Therapies</h2>
              <p className="mt-5 leading-relaxed text-white/60">
                Time-tested Kerala therapies, prepared with medicated oils and fresh herbs.
              </p>
            </Reveal>

            <ul className="mt-10 sm:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {treatments.map((t, i) => (
                <li key={t.name}>
                  <Reveal delay={(i % 3) * 120}>
                    <article className="group relative isolate aspect-[4/5] overflow-hidden rounded-2xl bg-black/20 sm:aspect-[3/4]">
                      <Image
                        src={t.image}
                        alt={t.name}
                        fill
                        sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                        className="-z-10 object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110 group-focus-within:scale-110"
                      />
                      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-forest via-forest/40 to-transparent transition-opacity duration-700 can-hover:opacity-80 can-hover:group-hover:opacity-100" />

                      <span className="absolute left-5 top-5 rounded-full border border-white/25 bg-white/10 px-3 py-1 font-serif text-sm text-white backdrop-blur-md">
                        0{i + 1}
                      </span>

                      <div className="absolute inset-x-0 bottom-0 p-7">
                        <h3 className="font-serif text-3xl text-white">{t.name}</h3>
                        <span className="mt-4 block h-px w-10 bg-gold transition-all duration-700 group-hover:w-20" />
                        {/* Hover devices reveal the details on hover; touch screens always show them */}
                        <div className="grid transition-all duration-700 ease-out can-hover:grid-rows-[0fr] can-hover:opacity-0 can-hover:group-hover:grid-rows-[1fr] can-hover:group-hover:opacity-100 can-hover:group-focus-within:grid-rows-[1fr] can-hover:group-focus-within:opacity-100">
                          <div className="overflow-hidden">
                            <p className="pt-4 text-sm leading-relaxed text-white/80">{t.desc}</p>
                            <a
                              href="#contact"
                              className="mt-5 inline-block text-xs uppercase tracking-[0.2em] text-gold hover:text-white"
                            >
                              Book this therapy →
                            </a>
                          </div>
                        </div>
                      </div>
                    </article>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Facilities */}
        <section id="facilities" className="bg-linen py-16 sm:py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal className="grid gap-6 lg:grid-cols-[1fr_2fr] lg:items-end">
              <div>
                <Label>Hospital Facilities</Label>
                <h2 className="mt-5 font-serif text-3xl text-forest sm:text-4xl md:text-5xl">A Place to Heal</h2>
              </div>
              <p className="max-w-xl leading-relaxed text-muted lg:justify-self-end">
                From the first consultation to a full residential stay, every space is designed for calm,
                comfort and care.
              </p>
            </Reveal>

            <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:auto-rows-[230px] lg:grid-cols-4">
              {facilities.map((f, i) => (
                <li key={f.name} className={f.span}>
                  <Reveal delay={(i % 4) * 100} className="h-full">
                    <article className="group relative isolate h-full min-h-[260px] overflow-hidden rounded-2xl bg-forest/10 lg:min-h-0">
                      <Image
                        src={f.image}
                        alt={f.name}
                        fill
                        sizes={f.span ? "(min-width:1024px) 50vw, (min-width:640px) 50vw, 100vw" : "(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"}
                        className="-z-10 object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                      />
                      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-forest/95 via-forest/45 via-45% to-transparent to-75%" />
                      <div className="absolute inset-x-0 bottom-0 p-6">
                        <h3 className={`font-serif text-white [text-shadow:0_1px_12px_rgba(38,61,43,0.5)] ${f.span.includes("row-span-2") ? "text-3xl md:text-4xl" : "text-2xl"}`}>
                          {f.name}
                        </h3>
                        <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/80">{f.desc}</p>
                      </div>
                    </article>
                  </Reveal>
                </li>
              ))}
            </ul>

            <Reveal className="mt-8 text-right">
              <Link
                href="/gallery"
                className="text-sm text-forest underline decoration-gold underline-offset-8 hover:decoration-forest"
              >
                See the full gallery →
              </Link>
            </Reveal>

            <Reveal className="mt-10 sm:mt-16">
              <p className="text-xs uppercase tracking-[0.3em] text-gold-deep">Amenities</p>
              <ul className="mt-6 grid grid-cols-2 gap-x-8 border-t border-black/10 md:grid-cols-4">
                {amenities.map((a) => (
                  <li key={a} className="flex items-center gap-3 border-b border-black/10 py-4 text-sm text-forest">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {a}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* Our Doctor */}
        <section id="doctor" className="py-16 sm:py-24 md:py-32">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-[2fr_3fr] md:gap-14">
            <Reveal>
              {/* Portrait placeholder — replace with a photo of Dr. Siji Joseph */}
              <div className="relative mx-auto flex aspect-[4/3] w-full max-w-md items-center md:aspect-[4/5] md:max-w-none justify-center overflow-hidden rounded-2xl bg-linen">
                <span className="font-serif text-8xl text-gold">SJ</span>
                <span className="absolute bottom-5 left-5 rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs text-muted backdrop-blur-md">
                  Third generation
                </span>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <Label>Our Doctor</Label>
              <h2 className="mt-5 font-serif text-3xl text-forest sm:text-4xl md:text-5xl">Dr. Siji Joseph</h2>
              <p className="mt-5 max-w-lg leading-relaxed text-muted">
                Ayurveda at Chandana is a family inheritance. It began with Dr. Siji Joseph’s grandfather,
                was carried forward by the late Elikutty, and is practised today with the same care.
              </p>

              <ol className="mt-10 border-l border-gold/50">
                {lineage.map((l) => (
                  <li key={l.gen} className="relative pb-8 pl-8 last:pb-0">
                    <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-gold ring-4 ring-background" />
                    <p className="text-xs uppercase tracking-[0.2em] text-gold-deep">{l.gen}</p>
                    <h3 className="mt-1 font-serif text-2xl text-forest">{l.name}</h3>
                    <p className="mt-1 text-sm text-muted">{l.text}</p>
                  </li>
                ))}
              </ol>

              <Link
                href="/history"
                className="mt-10 inline-block text-sm text-forest underline decoration-gold underline-offset-8 hover:decoration-forest"
              >
                Read our family history →
              </Link>
            </Reveal>
          </div>
        </section>

        {/* Why Choose Us */}
        <section id="why-us" className="bg-forest py-16 sm:py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal className="grid gap-6 lg:grid-cols-[1fr_2fr] lg:items-end">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-gold">Why Choose Us</p>
                <h2 className="mt-5 font-serif text-3xl leading-tight text-white sm:text-4xl md:text-5xl">
                  Why Chandana Ayurveda?
                </h2>
              </div>
              <p className="max-w-xl leading-relaxed text-white/65 lg:justify-self-end">
                Three generations of Ayurvedic knowledge, offered with the attention and care every patient
                deserves.
              </p>
            </Reveal>

            <ul className="mt-10 sm:mt-16 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
              {reasons.map(({ icon: Icon, title, text }, i) => (
                <li key={title} className="bg-forest">
                  <Reveal delay={i * 100} className="group h-full p-8 transition-colors duration-500 hover:bg-white/[0.04]">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 text-gold transition-colors duration-500 group-hover:bg-gold group-hover:text-forest">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-8 font-serif text-2xl text-white">{title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/65">{text}</p>
                  </Reveal>
                </li>
              ))}
            </ul>

            {accreditations.length > 0 && (
              <Reveal className="mt-14">
                <p className="text-xs uppercase tracking-[0.3em] text-gold">Accreditations</p>
                <ul className="mt-6 flex flex-wrap gap-4">
                  {accreditations.map((a) => (
                    <li key={a.name} className="flex items-center gap-4 rounded-full border border-white/15 py-3 pl-3 pr-6">
                      <Badge className="h-8 w-8 text-gold" />
                      <div>
                        <p className="text-sm text-white">{a.name}</p>
                        <p className="text-xs text-white/55">{a.detail}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}

            <Reveal className="mt-14">
              <a
                href="#contact"
                className="inline-block rounded-full bg-gold px-8 py-3.5 text-sm tracking-wide text-forest transition-colors hover:bg-white"
              >
                Book a consultation
              </a>
            </Reveal>
          </div>
        </section>

        {/* Testimonials — only consented entries from lib/site.ts are shown */}
        {publishedTestimonials.length > 0 && (
          <section id="testimonials" className="py-16 sm:py-24 md:py-32">
            <div className="mx-auto max-w-6xl px-6">
              <Reveal className="mx-auto max-w-2xl text-center">
                <Label>Patient Stories</Label>
                <h2 className="mt-5 font-serif text-3xl text-forest sm:text-4xl md:text-5xl">In Their Own Words</h2>
              </Reveal>

              <ul className="mt-10 sm:mt-16 columns-1 gap-6 md:columns-2 lg:columns-3">
                {publishedTestimonials.map((t, i) => (
                  <li key={i} className="mb-6 break-inside-avoid">
                    <Reveal delay={(i % 3) * 100}>
                      <figure className="rounded-2xl border border-black/5 bg-white/50 p-8">
                        <span className="block font-serif text-6xl leading-none text-gold" aria-hidden>
                          “
                        </span>
                        <blockquote className="-mt-4 font-serif text-xl leading-relaxed text-forest">
                          {t.quote}
                        </blockquote>
                        <figcaption className="mt-6 flex items-center gap-4 border-t border-black/10 pt-5">
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-linen font-serif text-gold-deep">
                            {t.name.charAt(0)}
                          </span>
                          <div className="text-sm">
                            <p className="text-forest">
                              {t.name}
                              {t.detail && <span className="text-muted"> · {t.detail}</span>}
                            </p>
                            {t.treatment && <p className="text-xs text-gold-deep">{t.treatment}</p>}
                          </div>
                        </figcaption>
                      </figure>
                    </Reveal>
                  </li>
                ))}
              </ul>

              <Reveal className="mt-10 flex flex-col items-center gap-3 text-center text-xs text-muted">
                <p>Shared with each patient’s permission. Individual experiences may vary.</p>
                {reviewsUrl && (
                  <a
                    href={reviewsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-forest underline decoration-gold underline-offset-8 hover:decoration-forest"
                  >
                    Read more reviews →
                  </a>
                )}
              </Reveal>
            </div>
          </section>
        )}

        {/* Contact */}
        <section id="contact" className="border-t border-black/5 bg-linen py-16 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1fr_2fr]">
            <div>
              <Label>Contact</Label>
              <ul className="mt-8 space-y-2 text-sm text-muted">
                <li>{site.address}</li>
                <li><a href={site.phoneHref} className="hover:text-forest">{site.phone}</a></li>
                <li><a href={`mailto:${site.email}`} className="hover:text-forest">{site.email}</a></li>
                <li>{site.hours}</li>
              </ul>
              <div className="mt-8 flex flex-col items-start gap-3 text-sm">
                {whatsappUrl && (
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-forest underline decoration-gold underline-offset-8 hover:decoration-forest">
                    Chat on WhatsApp →
                  </a>
                )}
                <a href={mapsDirectionsUrl} target="_blank" rel="noopener noreferrer" className="text-forest underline decoration-gold underline-offset-8 hover:decoration-forest">
                  Get directions →
                </a>
                <Link href="/contact" className="text-forest underline decoration-gold underline-offset-8 hover:decoration-forest">
                  All contact details →
                </Link>
              </div>
            </div>
            <div>
              <h2 className="font-serif text-3xl text-forest md:text-4xl">Book an appointment</h2>
              <div className="mt-10">
                <AppointmentForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
