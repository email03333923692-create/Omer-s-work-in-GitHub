"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { progressData } from "@/content/stats";

export function ProgressChart() {
  return (
    <div className="glass-strong p-4 sm:p-6">
      <p className="eyebrow">Performance Trend</p>
      <h3 className="font-display text-3xl mt-2">Last 8 months</h3>
      <p className="mt-2 text-sm text-white/60">
        Tracked monthly: sprint speed, stamina (yo-yo), finishing (xG-derived).
      </p>
      <div className="mt-6 h-[360px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={progressData}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1E90FF" stopOpacity={0.55} />
                <stop offset="100%" stopColor="#1E90FF" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#39FF7A" stopOpacity={0.5} />
                <stop offset="100%" stopColor="#39FF7A" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="g3" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F59E0B" stopOpacity={0.5} />
                <stop offset="100%" stopColor="#F59E0B" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255,255,255,0.06)"
            />
            <XAxis
              dataKey="month"
              stroke="rgba(255,255,255,0.4)"
              fontSize={12}
            />
            <YAxis
              stroke="rgba(255,255,255,0.4)"
              fontSize={12}
              domain={[60, 100]}
            />
            <Tooltip
              contentStyle={{
                background: "#0A0D12",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 12,
                color: "white",
                fontSize: 12,
              }}
            />
            <Legend wrapperStyle={{ fontSize: 12, color: "white" }} />
            <Area
              type="monotone"
              dataKey="speed"
              stroke="#1E90FF"
              fillOpacity={1}
              fill="url(#g1)"
              strokeWidth={2}
            />
            <Area
              type="monotone"
              dataKey="stamina"
              stroke="#39FF7A"
              fillOpacity={1}
              fill="url(#g2)"
              strokeWidth={2}
            />
            <Area
              type="monotone"
              dataKey="finishing"
              stroke="#F59E0B"
              fillOpacity={1}
              fill="url(#g3)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
