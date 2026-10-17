"use client";

import Link from "next/link";
import { useState } from "react";
import { nav } from "@/lib/site";
import { Close, Menu } from "./Icons";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="font-serif text-xl tracking-[0.2em] text-forest">
          CHANDANA
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-muted lg:flex xl:gap-8">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-forest">
              {item.label}
            </Link>
          ))}
          <Link href="/#contact" className="text-forest underline decoration-gold underline-offset-8 hover:decoration-forest">
            Book a visit
          </Link>
        </nav>
        <button
          className="p-1 text-forest lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <Close className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav className="flex max-h-[calc(100svh-4.5rem)] flex-col overflow-y-auto px-6 pb-6 text-muted lg:hidden">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-black/5 py-3 transition-colors hover:text-forest"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setOpen(false)}
            className="mt-5 rounded-full bg-forest py-3 text-center text-sm text-white transition-colors hover:bg-sage"
          >
            Book a visit
          </Link>
        </nav>
      )}
    </header>
  );
}
