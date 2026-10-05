export type Platform = "React Native" | "iOS" | "Android" | "iOS & Android";
export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  platforms: Platform[];
  links: { label: string; url: string }[];
  tags: string[];
  color: string;
  visual:
    | "energy"
    | "audio"
    | "identity"
    | "wallet"
    | "retail"
    | "payment"
    | "delivery"
    | "community";
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
