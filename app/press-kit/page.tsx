import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { CTAButton } from "@/components/shared/CTAButton";
import { player } from "@/content/player";
import { careerTotals } from "@/content/stats";

export const metadata: Metadata = {
  title: "Press Kit & CV",
  description:
    "Press kit for Abdul Ahad Omer — biography, key stats, branded assets, and downloadable CV.",
};

export default function PressKitPage() {
  return (
    <>
      <PageHero
        eyebrow="For media, press, and partners"
        title="Press Kit"
        subtitle="Biography, key stats, branded assets, and a downloadable football CV."
      >
        <div className="flex flex-wrap gap-3">
          <CTAButton href="/cv.txt" variant="primary" external>
            Download CV (.txt)
          </CTAButton>
          <CTAButton href="/contact" variant="ghost">
            Request high-res assets
          </CTAButton>
        </div>
      </PageHero>

      <section className="section">
        <div className="container-page grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 glass-strong p-6 sm:p-8">
            <p className="eyebrow">Short bio · 60 words</p>
            <p className="mt-3 text-base leading-relaxed text-white/85">
              {player.bio}
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <Fact label="Position" value="Attacking Midfielder" />
              <Fact label="Foot" value="Right" />
              <Fact label="Age" value="17" />
              <Fact label="Height" value="1.78 m" />
              <Fact label="Nationality" value="Pakistani" />
              <Fact label="City" value="Lahore" />
            </div>
          </div>

          <div className="glass-strong p-6 sm:p-8">
            <p className="eyebrow">Career snapshot</p>
            <ul className="mt-4 space-y-3 text-sm">
              <Snap label="Appearances" value={careerTotals.appearances} />
              <Snap label="Goals" value={careerTotals.goals} />
              <Snap label="Assists" value={careerTotals.assists} />
              <Snap
                label="Goal involvements"
                value={careerTotals.goalInvolvements}
              />
              <Snap label="Minutes" value={careerTotals.minutes} />
            </ul>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-page">
          <div className="glass-strong p-6 sm:p-8">
            <p className="eyebrow">Brand identity</p>
            <h3 className="font-display text-3xl mt-2">@10 — visual identity</h3>
            <p className="mt-2 text-sm text-white/65 max-w-2xl">
              The brand language is built around a simple idea: the No. 10. The
              electric blue and neon green pair against deep ink black to feel
              modern, athletic, and unmistakably football.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <Swatch hex="#05070A" name="Ink Black" />
              <Swatch hex="#1E90FF" name="Electric Blue" />
              <Swatch hex="#39FF7A" name="Neon Green" />
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-page">
          <div className="glass-strong p-6 sm:p-8">
            <p className="eyebrow">Boilerplate · Long bio</p>
            <p className="mt-4 text-sm leading-relaxed text-white/80">
              Abdul Ahad Omer is a 17-year-old attacking midfielder from Lahore,
              Pakistan, building a career in professional football. Known for
              vision, press resistance, and decisive actions in the final
              third, he plays primarily as a No. 10 with the technical floor of
              a No. 8. With 100+ goal involvements across age-grade football,
              recognition as captain, MVP awards, and inter-city development
              squad selection, he is currently open to academy intake,
              professional trials, showcase tournaments, and brand partnerships.
              Find him at abdulahadomer.com and on Instagram and YouTube as
              @abdulahadomer10.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
      <p className="text-[10px] uppercase tracking-[0.25em] text-white/50">
        {label}
      </p>
      <p className="mt-1 font-display text-xl tracking-wide">{value}</p>
    </div>
  );
}

function Snap({ label, value }: { label: string; value: number }) {
  return (
    <li className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3">
      <span className="text-white/60 text-xs uppercase tracking-[0.2em]">
        {label}
      </span>
      <span className="font-display text-2xl tracking-tight">
        {value.toLocaleString()}
      </span>
    </li>
  );
}

function Swatch({ hex, name }: { hex: string; name: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10">
      <div className="h-24" style={{ backgroundColor: hex }} />
      <div className="flex items-center justify-between bg-ink-900 px-4 py-3 text-xs">
        <span className="text-white/80">{name}</span>
        <span className="font-mono text-white/50">{hex}</span>
      </div>
    </div>
  );
}
