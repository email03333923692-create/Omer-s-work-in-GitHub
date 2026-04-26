"use client";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import { radarSkills } from "@/content/stats";

export function RadarSkillChart() {
  return (
    <div className="glass-strong p-4 sm:p-6">
      <p className="eyebrow">Player Attributes</p>
      <h3 className="font-display text-3xl mt-2">Attribute Radar</h3>
      <p className="mt-2 text-sm text-white/60">
        Self-scouted attribute spread, validated by coach feedback.
      </p>
      <div className="mt-6 h-[380px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={radarSkills} outerRadius="78%">
            <PolarGrid stroke="rgba(255,255,255,0.12)" />
            <PolarAngleAxis
              dataKey="attribute"
              tick={{ fill: "rgba(255,255,255,0.7)", fontSize: 12 }}
            />
            <PolarRadiusAxis
              angle={30}
              domain={[0, 100]}
              tick={{ fill: "rgba(255,255,255,0.4)", fontSize: 10 }}
              stroke="rgba(255,255,255,0.1)"
            />
            <Radar
              name="Player"
              dataKey="value"
              stroke="#1E90FF"
              fill="#1E90FF"
              fillOpacity={0.35}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
