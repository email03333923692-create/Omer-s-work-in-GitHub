import { seasonStats } from "@/content/stats";

const headers = [
  "Season",
  "Team",
  "Comp.",
  "App.",
  "G",
  "A",
  "Min",
  "Pass %",
  "Duels %",
];

export function StatsTable() {
  return (
    <div className="glass-strong overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10 bg-white/[0.02] text-[10px] uppercase tracking-[0.2em] text-white/50">
              {headers.map((h) => (
                <th key={h} className="px-4 py-4 text-left font-medium">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {seasonStats.map((s, i) => (
              <tr
                key={s.season + s.team}
                className={`border-b border-white/5 transition-colors hover:bg-white/[0.03] ${
                  i === seasonStats.length - 1 ? "border-b-0" : ""
                }`}
              >
                <td className="px-4 py-4 font-display text-base tracking-wider text-electric">
                  {s.season}
                </td>
                <td className="px-4 py-4 text-white/80">{s.team}</td>
                <td className="px-4 py-4 text-white/60">{s.competition}</td>
                <td className="px-4 py-4">{s.appearances}</td>
                <td className="px-4 py-4 font-semibold text-neon">{s.goals}</td>
                <td className="px-4 py-4 font-semibold text-electric">
                  {s.assists}
                </td>
                <td className="px-4 py-4 text-white/60">{s.minutes}</td>
                <td className="px-4 py-4">{s.passAccuracy}%</td>
                <td className="px-4 py-4">{s.duelsWon}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
