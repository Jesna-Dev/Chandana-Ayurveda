import type { Metadata } from "next";
import { DM_Sans, Lora, Noto_Sans_Malayalam, Noto_Serif_Malayalam } from "next/font/google";
import "./globals.css";

// Headings: a sturdy, readable serif (variable weight 400–700)
const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

// Body text: a clean, highly legible sans-serif
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

// Malayalam fallbacks: Lora and DM Sans have no Malayalam glyphs
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
      className={`${lora.variable} ${dmSans.variable} ${mlSerif.variable} ${mlSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
