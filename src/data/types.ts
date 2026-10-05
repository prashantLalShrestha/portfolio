export type Platform = "React Native" | "iOS" | "Android" | "iOS & Android";
export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  platform: Platform;
  tags: string[];
  color: string;
  visual: "energy" | "audio" | "identity" | "wallet";
  company: string;
  contributions: string[];
}
export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
}
