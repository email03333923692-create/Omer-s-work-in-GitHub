import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { CTAButton } from "@/components/shared/CTAButton";

export const metadata: Metadata = {
  title: "Training",
  description:
    "Inside the training week of Abdul Ahad Omer — performance philosophy, weekly structure, and key focus areas.",
};

const week = [
  { day: "MON", title: "Recovery + Mobility", body: "Active recovery, mobility flow, contrast bath." },
  { day: "TUE", title: "Strength + Tactical", body: "Lower-body strength + build-up patterns and finishing." },
  { day: "WED", title: "High-Intensity Football", body: "Small-sided games, decision-making at speed." },
  { day: "THU", title: "Upper + Skills", body: "Upper-body lift + ball mastery and weak-foot reps." },
  { day: "FRI", title: "Pre-Match Activation", body: "Light tactical, set-pieces, walk-through." },
  { day: "SAT", title: "Match Day", body: "Compete. Execute. Leave it on the pitch." },
  { day: "SUN", title: "Full Recovery", body: "Sleep, nutrition, family." },
];

const pillars = [
  {
    title: "Quality reps",
    body: "Volume only matters if every rep is at game speed and game intensity. Train how you play.",
  },
  {
    title: "Tactical periodisation",
    body: "Each session is anchored to a tactical principle: build-up, attacking transitions, set pieces, etc.",
  },
  {
    title: "Recovery as a weapon",
    body: "Sleep, nutrition, and active recovery are non-negotiable. The work happens between sessions too.",
  },
  {
    title: "Mental sharpness",
    body: "Visualisation, breath work, and journaling. The brain is a muscle that compounds.",
  },
];

export default function TrainingPage() {
  return (
    <>
      <PageHero
        eyebrow="Performance Philosophy"
        title="Training"
        subtitle="Talent gets you noticed. Structure gets you signed. Here's how the week looks."
      >
        <CTAButton href="/blog/training-week-structure" variant="ghost">
          Read the deep dive
        </CTAButton>
      </PageHero>

      <section className="section">
        <div className="container-page">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-7">
            {week.map((d) => (
              <div
                key={d.day}
                className="glass-strong p-5 transition-colors hover:bg-white/[0.06]"
              >
                <p className="font-display text-3xl tracking-tight text-electric">
                  {d.day}
                </p>
                <p className="mt-3 text-sm font-semibold">{d.title}</p>
                <p className="mt-2 text-xs text-white/60 leading-relaxed">
                  {d.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-page grid gap-4 md:grid-cols-2">
          {pillars.map((p) => (
            <div key={p.title} className="glass-strong p-6">
              <p className="eyebrow">Pillar</p>
              <h3 className="mt-2 font-display text-3xl tracking-wide">
                {p.title}
              </h3>
              <p className="mt-3 text-sm text-white/70 leading-relaxed">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
