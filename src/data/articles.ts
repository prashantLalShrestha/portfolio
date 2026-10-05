export interface Article {
  title: string;
  summary: string;
  url: string;
  published: string;
  dateLabel: string;
  readingTime: string;
  topics: string[];
}
export const articles: Article[] = [
  {
    title:
      "Why we chose Expo Application Services (EAS): A journey toward simplicity",
    summary:
      "Building the app shouldn’t be harder than writing it. Here’s why our team chose EAS to make the release process simpler.",
    url: "https://it.essent.nl/articles/software/eas",
    published: "2026-01-22",
    dateLabel: "22 January 2026",
    readingTime: "7 min read",
    topics: ["EAS", "CI/CD", "Architecture"],
  },
  {
    title:
      "Migration to Expo: The journey, the lessons, and where we stand today",
    summary:
      "Moving two apps to Expo while still shipping updates. What went smoothly, what surprised us, and what we learned.",
    url: "https://it.essent.nl/articles/software/migration-to-expo",
    published: "2026-01-29",
    dateLabel: "29 January 2026",
    readingTime: "7 min read",
    topics: ["Expo", "React Native", "Migration"],
  },
];
