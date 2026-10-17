import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import { galleryImages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery | Chandana Ayurveda",
  description: "Photos of Chandana Ayurveda — treatment rooms, therapies and facilities.",
};

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-6 pb-24 pt-12 md:pt-20">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-deep">Gallery</p>
          <h1 className="mt-6 font-serif text-5xl leading-[1.1] text-forest sm:text-6xl">Inside Chandana</h1>
          <p className="mt-6 max-w-xl leading-relaxed text-muted">
            A glimpse of our treatment rooms, therapies and the spaces where healing happens.
          </p>
          <div className="mt-12">
            <Gallery images={galleryImages} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
