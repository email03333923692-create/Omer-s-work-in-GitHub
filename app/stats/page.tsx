import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { StatCard } from "@/components/shared/StatCard";
import { StatsTable } from "@/components/stats/StatsTable";
import { RadarSkillChart } from "@/components/stats/RadarSkillChart";
import { ProgressChart } from "@/components/stats/ProgressChart";
import { SeasonGoalsChart } from "@/components/stats/SeasonGoalsChart";
import { careerTotals } from "@/content/stats";

export const metadata: Metadata = {
  title: "Stats Dashboard",
  description:
    "Performance dashboard with season-by-season output, radar of attributes, and progress trends.",
};

export default function StatsPage() {
  return (
    <>
      <PageHero
        eyebrow="Performance Dashboard"
        title="Stats"
        subtitle="Season-by-season output, attribute radar, and a tracked performance trend across the last 8 months."
      />

      <section className="section">
        <div className="container-page">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard label="Career appearances" value={careerTotals.appearances} />
            <StatCard label="Career goals" value={careerTotals.goals} accent="neon" />
            <StatCard label="Career assists" value={careerTotals.assists} />
            <StatCard
              label="Goal involvements"
              value={careerTotals.goalInvolvements}
              accent="neon"
            />
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-page">
          <StatsTable />
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-page grid gap-6 lg:grid-cols-2">
          <RadarSkillChart />
          <ProgressChart />
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-page">
          <SeasonGoalsChart />
        </div>
      </section>
    </>
  );
}
