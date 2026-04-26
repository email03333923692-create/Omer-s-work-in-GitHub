type Props = {
  items: string[];
  className?: string;
};

export function Marquee({ items, className }: Props) {
  const doubled = [...items, ...items];
  return (
    <div
      className={`relative overflow-hidden mask-fade-x ${className ?? ""}`}
      aria-hidden
    >
      <div className="flex w-max animate-ticker gap-12 whitespace-nowrap py-4">
        {doubled.map((it, i) => (
          <span
            key={i}
            className="font-display text-3xl tracking-wider text-white/30"
          >
            {it}
            <span className="ml-12 text-electric">●</span>
          </span>
        ))}
      </div>
    </div>
  );
}
