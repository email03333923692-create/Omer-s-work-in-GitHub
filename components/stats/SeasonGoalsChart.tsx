"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { seasonStats } from "@/content/stats";

export function SeasonGoalsChart() {
  const data = seasonStats.map((s) => ({
    season: s.season,
    Goals: s.goals,
    Assists: s.assists,
  }));

  return (
    <div className="glass-strong p-4 sm:p-6">
      <p className="eyebrow">Season Output</p>
      <h3 className="font-display text-3xl mt-2">Goals & Assists by season</h3>
      <div className="mt-6 h-[320px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255,255,255,0.06)"
            />
            <XAxis
              dataKey="season"
              stroke="rgba(255,255,255,0.4)"
              fontSize={12}
            />
            <YAxis stroke="rgba(255,255,255,0.4)" fontSize={12} />
            <Tooltip
              contentStyle={{
                background: "#0A0D12",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 12,
                color: "white",
                fontSize: 12,
              }}
              cursor={{ fill: "rgba(255,255,255,0.04)" }}
            />
            <Legend wrapperStyle={{ fontSize: 12, color: "white" }} />
            <Bar dataKey="Goals" fill="#39FF7A" radius={[6, 6, 0, 0]} />
            <Bar dataKey="Assists" fill="#1E90FF" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
