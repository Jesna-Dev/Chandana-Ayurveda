import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HistoryContent from "@/components/HistoryContent";

export const metadata: Metadata = {
  title: "Medicine of Generations | Chandana Ayurveda",
  description:
    "The history of Ayurveda and the Kerala tradition carried forward at Chandana Ayurveda — in English and Malayalam.",
};

export default function HistoryPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HistoryContent />
      </main>
      <Footer />
    </>
  );
}
