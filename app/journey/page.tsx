import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Timeline } from "@/components/journey/Timeline";

export const metadata: Metadata = {
  title: "Journey",
  description:
    "From street football to development squads — the full football journey of Abdul Ahad Omer.",
};

export default function JourneyPage() {
  return (
    <>
      <PageHero
        eyebrow="From street football to the next chapter"
        title="The Journey"
        subtitle="A timeline of every milestone that shaped the player. The grind, the breakthroughs, the lessons."
      />
      <section className="section">
        <div className="container-page max-w-5xl">
          <Timeline />
        </div>
      </section>
    </>
  );
}
