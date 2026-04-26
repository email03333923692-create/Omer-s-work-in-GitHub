import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { QuickStats } from "@/components/home/QuickStats";
import { HighlightsPreview } from "@/components/home/HighlightsPreview";
import { SocialFeed } from "@/components/home/SocialFeed";
import { CTASection } from "@/components/home/CTASection";
import { StrengthsBlock } from "@/components/home/StrengthsBlock";
import { Marquee } from "@/components/shared/Marquee";
import { PersonJsonLd } from "@/components/shared/JsonLd";

export const metadata: Metadata = {
  title: "Abdul Ahad Omer — Footballer | No. 10",
  description:
    "Official portfolio of Abdul Ahad Omer — attacking midfielder, No. 10. Watch highlights, read the journey, and open a conversation with academies, scouts, and sponsors.",
};

export default function HomePage() {
  return (
    <>
      <PersonJsonLd />
      <HeroSection />
      <Marquee
        items={[
          "ATTACKING MIDFIELDER",
          "NO. 10",
          "PRESS RESISTANT",
          "VISION FIRST",
          "OPEN TO TRIALS",
          "SCOUTS WELCOME",
        ]}
        className="border-y border-white/10 bg-ink-900/40"
      />
      <QuickStats />
      <StrengthsBlock />
      <HighlightsPreview />
      <SocialFeed />
      <CTASection />
    </>
  );
}
