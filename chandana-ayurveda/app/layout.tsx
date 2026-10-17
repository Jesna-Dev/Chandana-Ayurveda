import type { Metadata } from "next";
import { Cormorant_Garamond, Jost, Noto_Sans_Malayalam, Noto_Serif_Malayalam } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

// Malayalam fallbacks: Cormorant and Jost have no Malayalam glyphs
const mlSerif = Noto_Serif_Malayalam({
  variable: "--font-ml-serif",
  subsets: ["malayalam"],
});

const mlSans = Noto_Sans_Malayalam({
  variable: "--font-ml-sans",
  subsets: ["malayalam"],
});

export const metadata: Metadata = {
  title: "Chandana Ayurveda | Traditional Kerala Ayurveda Hospital",
  description:
    "Chandana Ayurveda Hospital offers authentic Kerala Ayurveda treatments — Panchakarma, Abhyanga, Shirodhara and more — guided by experienced Vaidyas.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jost.variable} ${mlSerif.variable} ${mlSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
