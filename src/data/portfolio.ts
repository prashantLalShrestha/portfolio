import type { Experience, Project } from "./types";
export const profile = {
  name: "Prashant Shrestha",
  role: "Senior Mobile Engineer",
  location: "Amsterdam, Netherlands",
  email: "prashantlurvs@gmail.com",
  github: "https://github.com/prashantLalShrestha",
  linkedin: "https://www.linkedin.com/in/prashant-shrestha",
  cv: "/prashant-shrestha-cv.pdf",
  picture: "/prashant-shrestha-picture.jpg",
  cvSummary:
    "Senior Mobile Engineer with 6+ years of experience building iOS, Android, and React Native apps. I focus on accessible products, secure platforms, and reliable releases.",
  summary:
    "Hi, I’m Prashant. I build mobile apps for everyday life. These days, I’m at Essent, helping people make sense of their energy use.",
  bio: "I’m a mobile engineer based in Amsterdam. Over the past six years and a bit, I’ve worked on everything from money transfers to audio tours. I like figuring out the tricky parts so an app feels easy to use.",
  interests: ["Pottery", "Ukulele", "Hiking", "Travel", "Food"],
  languages: ["Nepali · Native", "English · Fluent", "Dutch · Learning"],
};
export const projects: Project[] = [
  {
    slug: "essent",
    title: "Essent mobile app",
    category: "ENERGY & EVERYDAY LIFE",
    description:
      "Helping people understand their energy use and take control of their payments.",
    platform: "React Native",
    tags: ["React Native", "Expo", "Accessibility"],
    color: "sage",
    visual: "energy",
    company: "Essent",
    contributions: [
      "Delivered real-time energy consumption insights and payment adjustment features.",
      "Implemented WCAG 2.2 AA accessibility, achieving certification by Stichting Accessibility.",
      "Migrated the app to Expo and designed CI/CD pipelines.",
      "Led feature-flag migration to LaunchDarkly and documented platform decisions with ADRs.",
      "Supported live operations through on-call duties and Sentry monitoring.",
    ],
  },
  {
    slug: "podwalks",
    title: "Podwalks audio tours",
    category: "AUDIO & EXPLORATION",
    description:
      "Location-based audio tours that bring the world around you to life.",
    platform: "iOS & Android",
    tags: ["iOS & Android", "Shared infrastructure", "Audio"],
    color: "sand",
    visual: "audio",
    company: "Elements Interactive · Podwalks",
    contributions: [
      "Owned development of a white-label location-based audio tour app.",
      "Built shared mobile infrastructure for long-term stability.",
      "Translated product requirements into scalable, maintainable mobile solutions.",
    ],
  },
  {
    slug: "kiwa-ewallet",
    title: "Kiwa eWallet",
    category: "DIGITAL IDENTITY",
    description:
      "Secure credential sharing, built around real-world mobile standards.",
    platform: "Android",
    tags: ["Android", "Bluetooth & NFC", "ISO 18013-5"],
    color: "lavender",
    visual: "identity",
    company: "Elements Interactive · Kiwa eWallet",
    contributions: [
      "Served as an Android mobile consultant on Kiwa eWallet.",
      "Implemented secure credential sharing over Bluetooth and NFC.",
      "Worked with ISO 18013-5 standards for mobile credentials.",
    ],
  },
  {
    slug: "iremit",
    title: "iRemit Customer App",
    category: "FINTECH & REMITTANCE",
    description:
      "Mobile remittance experiences with secure identity verification at their core.",
    platform: "iOS",
    tags: ["iOS & Android", "eKYC", "OWASP"],
    color: "rose",
    visual: "wallet",
    company: "Inficare · iRemit",
    contributions: [
      "Built the iRemit Customer App and integrated an eKYC system.",
      "Implemented OWASP Mobile Security practices with successful FSI VAPT approval in Japan, Korea, and Malaysia.",
      "Led end-to-end development across fintech, remittance, and enterprise domains.",
    ],
  },
];
export const experience: Experience[] = [
  {
    company: "Essent",
    role: "Senior Mobile Engineer",
    period: "Jul 2024 — Present",
    location: "’s-Hertogenbosch, Netherlands",
    highlights: [
      "Delivered energy consumption insights and payment adjustment features in React Native.",
      "Implemented WCAG 2.2 AA accessibility, achieving certification by Stichting Accessibility.",
      "Migrated to Expo, designed CI/CD pipelines, and led the LaunchDarkly feature-flag migration.",
    ],
  },
  {
    company: "Elements Interactive",
    role: "Mobile App Developer",
    period: "Jun 2022 — May 2024",
    location: "Almere, Netherlands",
    highlights: [
      "Owned Podwalks development and shared mobile infrastructure.",
      "Implemented secure Android credential sharing for Kiwa eWallet using Bluetooth, NFC, and ISO 18013-5.",
      "Delivered React Native features and UX improvements for GAMMA & Karwei.",
    ],
  },
  {
    company: "Inficare",
    role: "Lead Mobile Developer",
    period: "Jun 2019 — Jan 2021",
    location: "Kathmandu, Nepal",
    highlights: [
      "Led delivery of 15+ mobile applications and a team of 10 developers.",
      "Built iRemit with eKYC and applied OWASP security practices, achieving FSI VAPT approval in Japan, Korea, and Malaysia.",
    ],
  },
  {
    company: "Inficare",
    role: "iOS Developer",
    period: "Jan 2018 — Jun 2019",
    location: "Kathmandu, Nepal",
    highlights: [
      "Built the company’s first iOS apps: Paywell and iRemit.",
      "Introduced Git and improved mobile development practices.",
    ],
  },
];
export const skills = [
  {
    title: "iOS development",
    label: "01 / iOS",
    items: [
      "Swift",
      "SwiftUI",
      "UIKit",
      "TCA",
      "Combine",
      "Async/Await",
      "Core Data / SwiftData",
      "XCTest",
    ],
  },
  {
    title: "Android development",
    label: "02 / Android",
    items: [
      "Kotlin",
      "Jetpack Compose",
      "Coroutines",
      "MVVM",
      "Room",
      "Ktor",
      "Kotlin Multiplatform",
      "Hilt",
    ],
  },
  {
    title: "React Native development",
    label: "03 / React Native",
    items: [
      "TypeScript",
      "Expo",
      "React Query",
      "Redux",
      "Reanimated",
      "Storybook",
      "Detox",
      "Maestro",
    ],
  },
  {
    title: "Architecture & delivery",
    label: "04 / Engineering",
    items: [
      "Clean architecture",
      "WCAG 2.2",
      "OWASP",
      "CI/CD",
      "Fastlane",
      "Sentry",
      "Feature flags",
      "GraphQL",
    ],
  },
];
