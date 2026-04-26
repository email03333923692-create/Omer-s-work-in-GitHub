"use client";

import { cn } from "@/lib/cn";

type Props = {
  options: { value: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
};

export function FilterTabs({ options, value, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => onChange(opt.value)}
          className={cn(
            "rounded-full border px-4 py-2 text-xs uppercase tracking-[0.25em] transition-all",
            value === opt.value
              ? "border-electric bg-electric/10 text-white shadow-glow"
              : "border-white/10 bg-white/[0.02] text-white/60 hover:border-white/30 hover:text-white"
          )}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
