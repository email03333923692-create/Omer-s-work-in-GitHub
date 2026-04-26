import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { PlayerCard } from "@/components/profile/PlayerCard";
import { Strengths } from "@/components/profile/Strengths";
import { DevelopmentFocus } from "@/components/profile/DevelopmentFocus";
import { Achievements } from "@/components/profile/Achievements";
import { CTAButton } from "@/components/shared/CTAButton";

export const metadata: Metadata = {
  title: "Player Profile",
  description:
    "Player profile of Abdul Ahad Omer — attacking midfielder, No. 10. Strengths, development focus, and key achievements.",
};

export default function ProfilePage() {
  return (
    <>
      <PageHero
        eyebrow="Player Profile · Digital CV"
        title="The Player"
        subtitle="A press-resistant attacking midfielder with the technical floor of a No. 8 and the creative ceiling of a No. 10."
      >
        <div className="flex flex-wrap gap-3">
          <CTAButton href="/stats" variant="primary">
            View Stats Dashboard
          </CTAButton>
          <CTAButton href="/press-kit" variant="ghost">
            Download CV
          </CTAButton>
        </div>
      </PageHero>

      <section className="section">
        <div className="container-page">
          <PlayerCard />
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-page grid gap-6 lg:grid-cols-2">
          <Strengths />
          <DevelopmentFocus />
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-page">
          <Achievements />
        </div>
      </section>
    </>
  );
}
