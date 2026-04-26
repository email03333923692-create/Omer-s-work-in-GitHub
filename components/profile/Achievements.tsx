import { player } from "@/content/player";

export function Achievements() {
  return (
    <section className="glass-strong p-6 sm:p-8">
      <p className="eyebrow">Achievements</p>
      <h3 className="font-display text-3xl mt-2">Milestones to date</h3>
      <ul className="mt-6 space-y-3">
        {player.achievements.map((a) => (
          <li
            key={a}
            className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4"
          >
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-electric shadow-glow" />
            <span className="text-sm text-white/80">{a}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
