import type { ProgressPoint, RadarSkill, SeasonStats } from "@/types";

export const seasonStats: SeasonStats[] = [
  {
    season: "2021/22",
    team: "City Youth U-14",
    competition: "Regional Youth League",
    appearances: 22,
    goals: 9,
    assists: 11,
    minutes: 1840,
    yellow: 2,
    red: 0,
    passAccuracy: 81,
    duelsWon: 54,
  },
  {
    season: "2022/23",
    team: "City Youth U-15",
    competition: "Regional Youth League",
    appearances: 26,
    goals: 14,
    assists: 12,
    minutes: 2210,
    yellow: 3,
    red: 0,
    passAccuracy: 84,
    duelsWon: 58,
  },
  {
    season: "2023/24",
    team: "U-16 Regional Select",
    competition: "Inter-City Cup",
    appearances: 24,
    goals: 11,
    assists: 12,
    minutes: 2080,
    yellow: 4,
    red: 0,
    passAccuracy: 86,
    duelsWon: 61,
  },
  {
    season: "2024/25",
    team: "City Development XI",
    competition: "Development League",
    appearances: 18,
    goals: 8,
    assists: 9,
    minutes: 1530,
    yellow: 2,
    red: 0,
    passAccuracy: 88,
    duelsWon: 63,
  },
];

export const radarSkills: RadarSkill[] = [
  { attribute: "Passing", value: 88, fullMark: 100 },
  { attribute: "Vision", value: 90, fullMark: 100 },
  { attribute: "Dribbling", value: 84, fullMark: 100 },
  { attribute: "Finishing", value: 80, fullMark: 100 },
  { attribute: "Stamina", value: 86, fullMark: 100 },
  { attribute: "Physical", value: 72, fullMark: 100 },
  { attribute: "Defending", value: 70, fullMark: 100 },
  { attribute: "Set Pieces", value: 85, fullMark: 100 },
];

export const progressData: ProgressPoint[] = [
  { month: "Jan", speed: 72, stamina: 74, finishing: 70 },
  { month: "Feb", speed: 74, stamina: 76, finishing: 72 },
  { month: "Mar", speed: 76, stamina: 78, finishing: 74 },
  { month: "Apr", speed: 78, stamina: 80, finishing: 76 },
  { month: "May", speed: 80, stamina: 82, finishing: 78 },
  { month: "Jun", speed: 82, stamina: 84, finishing: 80 },
  { month: "Jul", speed: 83, stamina: 85, finishing: 82 },
  { month: "Aug", speed: 84, stamina: 86, finishing: 83 },
];

export const careerTotals = {
  appearances: seasonStats.reduce((s, x) => s + x.appearances, 0),
  goals: seasonStats.reduce((s, x) => s + x.goals, 0),
  assists: seasonStats.reduce((s, x) => s + x.assists, 0),
  minutes: seasonStats.reduce((s, x) => s + x.minutes, 0),
  goalInvolvements:
    seasonStats.reduce((s, x) => s + x.goals + x.assists, 0),
};
