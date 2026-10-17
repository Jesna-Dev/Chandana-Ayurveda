"use client";

import Link from "next/link";
import { useState } from "react";

type Lang = "en" | "ml";

const content = {
  en: {
    label: "Our History",
    title: "Medicine of Generations",
    intro:
      "Ayurveda, the “science of life”, is one of the world’s oldest systems of healing. For more than two thousand years, its knowledge has been handed down from teacher to student, and from one generation to the next.",
    sections: [
      {
        heading: "Ancient roots",
        body: "The foundations of Ayurveda are recorded in classical texts — the Charaka Samhita on internal medicine, the Sushruta Samhita on surgery, and Vagbhata’s Ashtanga Hridayam, which brought their wisdom together.",
      },
      {
        heading: "The Kerala tradition",
        body: "Few places hold Ayurveda as closely as Kerala. The Ashtanga Hridayam became its guiding text, and the Ashtavaidyas — renowned families of physicians — preserved and taught it for centuries. Kerala’s healers also developed their own distinctive therapies, such as Pizhichil, Njavarakizhi, Dhara and Thalapothichil.",
      },
      {
        heading: "Healing with the seasons",
        body: "The monsoon, when the air is cool and moist, has long been considered the season when the body is most receptive to treatment. The month of Karkidakam is still set aside for rejuvenation therapies.",
      },
      {
        heading: "Medicine of generations",
        body: "At Chandana Ayurveda, we carry this inheritance forward. Our medicines are prepared following classical methods, and our physicians practise the Kerala tradition as it has been taught for generations — with care, patience and respect for every patient.",
      },
    ],
    family: {
      heading: "Three generations",
      intro: "Chandana Ayurveda is a family tradition, passed from parent to child across three generations.",
      people: [
        {
          gen: "First generation",
          name: "Elikutty’s father",
          body: "Elikutty’s father first began the family’s practice of Ayurvedic healing, laying the foundation for everything that followed.",
        },
        {
          gen: "Second generation",
          name: "The late Elikutty",
          body: "Elikutty learned from her father and carried his healing tradition forward to the next generation.",
        },
        {
          gen: "Third generation",
          name: "Dr. Siji Joseph",
          body: "Today, Dr. Siji Joseph leads Chandana Ayurveda, continuing the family’s medicine with the same care — the third generation of this tradition.",
        },
      ],
    },
    cta: "Book a visit",
    back: "Back to home",
  },
  ml: {
    label: "ഞങ്ങളുടെ ചരിത്രം",
    title: "തലമുറകളുടെ വൈദ്യം",
    intro:
      "“ജീവിതത്തിന്റെ ശാസ്ത്രം” എന്നറിയപ്പെടുന്ന ആയുർവേദം ലോകത്തിലെ ഏറ്റവും പഴക്കമുള്ള ചികിത്സാരീതികളിൽ ഒന്നാണ്. രണ്ടായിരത്തിലധികം വർഷങ്ങളായി ഈ അറിവ് ഗുരുവിൽ നിന്ന് ശിഷ്യനിലേക്കും, ഒരു തലമുറയിൽ നിന്ന് അടുത്ത തലമുറയിലേക്കും കൈമാറി വരുന്നു.",
    sections: [
      {
        heading: "പുരാതന വേരുകൾ",
        body: "ആയുർവേദത്തിന്റെ അടിസ്ഥാനങ്ങൾ പ്രാചീന ഗ്രന്ഥങ്ങളിൽ രേഖപ്പെടുത്തിയിരിക്കുന്നു — കായചികിത്സയെക്കുറിച്ചുള്ള ചരകസംഹിത, ശസ്ത്രക്രിയയെക്കുറിച്ചുള്ള സുശ്രുതസംഹിത, ഇവയുടെ സാരം ഒന്നിച്ചു ചേർത്ത വാഗ്ഭടന്റെ അഷ്ടാംഗഹൃദയം.",
      },
      {
        heading: "കേരളീയ പാരമ്പര്യം",
        body: "ആയുർവേദം ഏറ്റവും ആഴത്തിൽ വേരൂന്നിയ നാടാണ് കേരളം. അഷ്ടാംഗഹൃദയം ഇവിടെ പ്രധാന ഗ്രന്ഥമായി മാറി; പ്രശസ്ത വൈദ്യകുടുംബങ്ങളായ അഷ്ടവൈദ്യന്മാർ നൂറ്റാണ്ടുകളോളം അതിനെ സംരക്ഷിക്കുകയും പഠിപ്പിക്കുകയും ചെയ്തു. പിഴിച്ചിൽ, ഞവരക്കിഴി, ധാര, തലപൊതിച്ചിൽ തുടങ്ങിയ തനതായ ചികിത്സകളും കേരളത്തിലെ വൈദ്യന്മാർ വികസിപ്പിച്ചെടുത്തു.",
      },
      {
        heading: "ഋതുക്കൾക്കൊപ്പമുള്ള ചികിത്സ",
        body: "അന്തരീക്ഷം തണുത്തതും ഈർപ്പമുള്ളതുമായ കാലവർഷം, ശരീരം ചികിത്സയെ ഏറ്റവും നന്നായി സ്വീകരിക്കുന്ന കാലമായി പണ്ടേ കണക്കാക്കപ്പെടുന്നു. കർക്കിടക മാസം ഇന്നും സുഖചികിത്സയ്ക്കായി മാറ്റിവയ്ക്കുന്നു.",
      },
      {
        heading: "തലമുറകളുടെ വൈദ്യം",
        body: "ചന്ദന ആയുർവേദത്തിൽ ഞങ്ങൾ ഈ പൈതൃകം മുന്നോട്ട് കൊണ്ടുപോകുന്നു. ഞങ്ങളുടെ ഔഷധങ്ങൾ പ്രാചീന രീതികൾ പിന്തുടർന്ന് തയ്യാറാക്കുന്നു; തലമുറകളായി പഠിപ്പിച്ചുവരുന്ന കേരളീയ പാരമ്പര്യം, ഓരോ രോഗിയോടുമുള്ള കരുതലോടും ക്ഷമയോടും ആദരവോടും കൂടി ഞങ്ങളുടെ വൈദ്യന്മാർ പിന്തുടരുന്നു.",
      },
    ],
    family: {
      heading: "മൂന്നു തലമുറകൾ",
      intro: "ചന്ദന ആയുർവേദം ഒരു കുടുംബപാരമ്പര്യമാണ് — മൂന്നു തലമുറകളിലൂടെ മാതാപിതാക്കളിൽ നിന്ന് മക്കളിലേക്ക് കൈമാറി വന്നത്.",
      people: [
        {
          gen: "ഒന്നാം തലമുറ",
          name: "ഏലിക്കുട്ടിയുടെ പിതാവ്",
          body: "ഏലിക്കുട്ടിയുടെ പിതാവാണ് കുടുംബത്തിന്റെ ആയുർവേദ ചികിത്സാപാരമ്പര്യത്തിന് തുടക്കം കുറിച്ചത്; പിന്നീട് വന്നതെല്ലാം ആ അടിത്തറയിലാണ് പടുത്തുയർത്തിയത്.",
        },
        {
          gen: "രണ്ടാം തലമുറ",
          name: "പരേതയായ ഏലിക്കുട്ടി",
          body: "പിതാവിൽ നിന്ന് ചികിത്സ അഭ്യസിച്ച ഏലിക്കുട്ടി, ആ പാരമ്പര്യം അടുത്ത തലമുറയിലേക്ക് കൈമാറി.",
        },
        {
          gen: "മൂന്നാം തലമുറ",
          name: "ഡോ. സിജി ജോസഫ്",
          body: "ഇന്ന് ഡോ. സിജി ജോസഫ് ചന്ദന ആയുർവേദത്തെ നയിക്കുന്നു; ഈ വൈദ്യപാരമ്പര്യത്തിന്റെ മൂന്നാം തലമുറയായി, അതേ കരുതലോടെ കുടുംബത്തിന്റെ പൈതൃകം തുടരുന്നു.",
        },
      ],
    },
    cta: "സന്ദർശനം ബുക്ക് ചെയ്യുക",
    back: "ഹോമിലേക്ക് മടങ്ങുക",
  },
} as const;

export default function HistoryContent() {
  const [lang, setLang] = useState<Lang>("en");
  const t = content[lang];

  return (
    <div lang={lang}>
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-10 md:pt-20">
        <div className="flex items-start justify-between gap-6">
          {/* Letter-spacing breaks apart Malayalam conjuncts, so it is English-only */}
          <p className={`text-gold-deep ${lang === "en" ? "text-xs uppercase tracking-[0.3em]" : "text-sm"}`}>
            {t.label}
          </p>
          <div className="flex text-xs" role="group" aria-label="Language">
            {(
              [
                ["en", "English"],
                ["ml", "മലയാളം"],
              ] as const
            ).map(([code, name]) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                aria-pressed={lang === code}
                className={`border px-3 py-1.5 transition-colors ${
                  lang === code ? "border-forest bg-forest text-white" : "border-black/15 text-muted hover:text-forest"
                } ${code === "ml" ? "-ml-px" : ""}`}
              >
                {name}
              </button>
            ))}
          </div>
        </div>
        <h1 className="mt-6 font-serif text-4xl leading-[1.15] text-forest sm:text-5xl md:text-6xl">{t.title}</h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">{t.intro}</p>
      </section>

      <section className="border-t border-black/5 py-20">
        <ol className="mx-auto max-w-6xl px-6">
          {t.sections.map((s, i) => (
            <li
              key={i}
              className="grid gap-4 border-b border-black/10 py-10 first:pt-0 last:border-0 md:grid-cols-[1fr_2fr] md:gap-12"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-serif text-sm text-gold-deep">0{i + 1}</span>
                <h2 className="font-serif text-2xl text-forest md:text-3xl">{s.heading}</h2>
              </div>
              <p className="leading-relaxed text-muted">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-black/5 bg-linen py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1fr_2fr]">
          <div>
            <h2 className="font-serif text-3xl text-forest md:text-4xl">{t.family.heading}</h2>
            <p className="mt-4 leading-relaxed text-muted">{t.family.intro}</p>
          </div>
          <ol className="border-l border-gold/60">
            {t.family.people.map((p) => (
              <li key={p.gen} className="relative pb-12 pl-10 last:pb-0">
                <span className="absolute -left-[6px] top-1.5 h-3 w-3 rounded-full bg-gold ring-4 ring-linen" />
                <p className={`text-gold-deep ${lang === "en" ? "text-xs uppercase tracking-[0.2em]" : "text-sm"}`}>
                  {p.gen}
                </p>
                <h3 className="mt-2 font-serif text-2xl text-forest md:text-3xl">{p.name}</h3>
                <p className="mt-3 leading-relaxed text-muted">{p.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-black/5 py-16">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-8 px-6">
          <Link
            href="/#contact"
            className="bg-forest px-8 py-3.5 text-sm tracking-wide text-white transition-colors hover:bg-sage"
          >
            {t.cta}
          </Link>
          <Link href="/" className="text-sm text-muted hover:text-forest">
            ← {t.back}
          </Link>
        </div>
      </section>
    </div>
  );
}
