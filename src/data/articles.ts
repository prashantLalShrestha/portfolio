export interface Article {
  title: string;
  summary: string;
  url: string;
  published: string;
  dateLabel: string;
  readingTime: string;
  topics: string[];
  cover: { src: string; width: number; height: number };
}
export const articles: Article[] = [
  {
    title: "Beyond the Brand Colors",
    summary:
      "Same team, different default settings. A few thoughts on culture, communication, and the people who make working together interesting.",
    url: "https://it.essent.nl/articles/software/beyond-the-brand-colors",
    cover: { src: "https://it.essent.nl/Thumbs/1280/0/90/CmsData/Images/Articles/beyond-the-brand-colors.png", width: 1279, height: 720 },
    published: "2026-11-12",
    dateLabel: "12 November 2026",
    readingTime: "7 min read",
    topics: ["Teamwork", "Culture", "Communication"],
  },
  {
    title:
      "Why we chose Expo Application Services (EAS): A journey toward simplicity",
    summary:
      "Building the app shouldn’t be harder than writing it. Here’s why our team chose EAS to make the release process simpler.",
    url: "https://it.essent.nl/articles/software/eas",
    cover: { src: "https://it.essent.nl/Thumbs/1280/0/90/CmsData/eas_part-i.png", width: 800, height: 533 },
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
    cover: { src: "https://it.essent.nl/Thumbs/1280/0/90/CmsData/eas-part-2.png", width: 1280, height: 853 },
    published: "2026-01-29",
    dateLabel: "29 January 2026",
    readingTime: "7 min read",
    topics: ["Expo", "React Native", "Migration"],
  },
];
