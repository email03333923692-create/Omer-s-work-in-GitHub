import { player } from "@/content/player";

export function Strengths() {
  return (
    <section className="glass-strong p-6 sm:p-8">
      <p className="eyebrow">Strengths</p>
      <h3 className="font-display text-3xl mt-2">What I bring to the side</h3>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {player.strengths.map((s) => (
          <li
            key={s}
            className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4"
          >
            <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-electric/15 text-electric">
              ✓
            </span>
            <span className="text-sm text-white/80">{s}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
