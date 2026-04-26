export type Foot = "Left" | "Right" | "Both";

export type Position =
  | "Goalkeeper"
  | "Centre-Back"
  | "Full-Back"
  | "Wing-Back"
  | "Defensive Midfielder"
  | "Central Midfielder"
  | "Attacking Midfielder"
  | "Winger"
  | "Striker"
  | "Forward";

export interface PlayerProfile {
  name: string;
  brand: string;
  shirtNumber: number;
  tagline: string;
  bio: string;
  age: number;
  dob: string;
  nationality: string;
  city: string;
  height: string;
  weight: string;
  foot: Foot;
  position: Position;
  secondaryPositions: Position[];
  currentClub: string;
  agentRepresented: boolean;
  availability: string;
  languages: string[];
  socials: {
    instagram: string;
    youtube: string;
    tiktok?: string;
    email: string;
  };
  strengths: string[];
  developmentFocus: string[];
  achievements: string[];
}

export interface JourneyStep {
  year: string;
  title: string;
  club: string;
  description: string;
  type: "club" | "trial" | "milestone" | "training" | "academy";
}

export interface SeasonStats {
  season: string;
  team: string;
  competition: string;
  appearances: number;
  goals: number;
  assists: number;
  minutes: number;
  yellow: number;
  red: number;
  passAccuracy: number;
  duelsWon: number;
}

export interface RadarSkill {
  attribute: string;
  value: number;
  fullMark: number;
}

export interface ProgressPoint {
  month: string;
  speed: number;
  stamina: number;
  finishing: number;
}

export type MediaCategory = "match" | "training" | "skills" | "interview" | "photo";

export interface MediaItem {
  id: string;
  type: "video" | "image";
  title: string;
  category: MediaCategory;
  src: string;
  thumbnail: string;
  source?: "YouTube" | "Instagram" | "Original";
  date: string;
  description?: string;
}

export interface BlogMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  cover: string;
  tags: string[];
  readingTime: string;
}

export type InquiryType = "sponsor" | "academy" | "scout" | "media" | "general";

export interface InquiryInput {
  name: string;
  email: string;
  type: InquiryType;
  subject?: string;
  message: string;
  org?: string;
  phone?: string;
}
