import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { player } from "@/content/player";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Abdul Ahad Omer — the player, the philosophy, and what's next.",
};

const values = [
  {
    title: "Compete every session",
    body: "Show up. Set the standard. Make every rep count. Daily competition compounds.",
  },
  {
    title: "Vision over volume",
    body: "Smart football is fast football. Read the picture, then act with conviction.",
  },
  {
    title: "Earn the badge",
    body: "Effort isn't optional — it's the foundation. Talent is what you do after the badge.",
  },
  {
    title: "Lift the team",
    body: "Leadership is a daily choice. The best player is the one who makes others better.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="The Player. The Philosophy."
        subtitle={`${player.tagline} — the principles behind the football, the people, and the journey.`}
      />

      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7 space-y-6">
            <p className="text-lg leading-relaxed text-white/80">{player.bio}</p>
            <p className="text-base leading-relaxed text-white/70">
              I grew up playing on every kind of surface — concrete, grass,
              gravel, dust. Football in Pakistan teaches you creativity early
              because the game is everywhere, but the structure is rare. That
              shaped how I see the game: confident on the ball, brave under
              pressure, and obsessed with finding the smarter pass.
            </p>
            <p className="text-base leading-relaxed text-white/70">
              I'm building something serious — a real, professional football
              career. That means a serious training week, serious recovery,
              serious match analysis. And serious people around me — coaches,
              teammates, family — who hold the standard with me.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="glass-strong p-6 sm:p-8">
              <p className="eyebrow">What I value</p>
              <ul className="mt-4 space-y-5">
                {values.map((v) => (
                  <li key={v.title}>
                    <p className="font-semibold">{v.title}</p>
                    <p className="mt-1 text-sm text-white/65">{v.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
