import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mx-auto flex w-full max-w-6xl flex-col justify-between gap-4 px-6 py-10 text-xs text-muted sm:flex-row">
      <p>© {site.name}</p>
      <div className="flex gap-6">
        <a href={site.social.instagram} className="hover:text-forest">Instagram</a>
        <a href={site.social.facebook} className="hover:text-forest">Facebook</a>
        <a href={site.social.whatsapp} className="hover:text-forest">WhatsApp</a>
      </div>
    </footer>
  );
}
