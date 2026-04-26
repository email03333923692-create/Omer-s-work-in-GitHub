import { careerTotals } from "@/content/stats";
import { StatCard } from "../shared/StatCard";

export function QuickStats() {
  return (
    <section className="section">
      <div className="container-page">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard label="Appearances" value={careerTotals.appearances} />
          <StatCard label="Goals" value={careerTotals.goals} accent="neon" />
          <StatCard label="Assists" value={careerTotals.assists} />
          <StatCard
            label="Goal Involvements"
            value={careerTotals.goalInvolvements}
            accent="neon"
          />
        </div>
      </div>
    </section>
  );
}
