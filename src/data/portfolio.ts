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
    platforms: ["iOS", "Android", "React Native"],
    links: [
      {
        label: "Essent app",
        url: "https://www.essent.nl/klanten/app",
      },
    ],
  },
  {
    slug: "podwalks",
    title: "Podwalks audio tours",
    category: "AUDIO & EXPLORATION",
    description:
      "Location-based audio tours that bring the world around you to life.",
    tags: ["iOS & Android", "Shared infrastructure", "Audio"],
    color: "sand",
    visual: "audio",
    company: "Elements Interactive · Podwalks",
    contributions: [
      "Owned development of a white-label location-based audio tour app.",
      "Built shared mobile infrastructure for long-term stability.",
      "Translated product requirements into scalable, maintainable mobile solutions.",
    ],
    platforms: ["iOS", "Android"],
    links: [
      {
        label: "Podwalks platform",
        url: "https://www.elements.nl/en/elements-podwalk-app-development",
      },
    ],
  },
  {
    slug: "intergamma",
    title: "GAMMA & Karwei apps",
    category: "SHOPPING & HOME PROJECTS",
    description:
      "A little help with the next home project. React Native apps for GAMMA and Karwei, part of Intergamma.",
    platforms: ["iOS", "Android", "React Native"],
    tags: ["React Native", "iOS & Android", "Retail"],
    color: "sand",
    visual: "retail",
    company: "Elements Interactive · Intergamma",
    contributions: [
      "Worked as a React Native consultant on the GAMMA and Karwei mobile apps.",
      "Delivered new features and improvements to the user experience.",
      "Helped maintain the apps and keep releases running smoothly.",
    ],
    links: [
      {
        label: "GAMMA on the App Store",
        url: "https://apps.apple.com/nl/app/gamma-bouwmarkt/id949829216",
      },
      {
        label: "Karwei on the App Store",
        url: "https://apps.apple.com/nl/app/karwei-klussen-inrichten/id950680989",
      },
    ],
  },
  {
    slug: "kiwa-ewallet",
    title: "Kiwa eWallet",
    category: "DIGITAL IDENTITY",
    description:
      "Secure credential sharing, built around real-world mobile standards.",
    tags: ["Android", "Bluetooth & NFC", "ISO 18013-5"],
    color: "lavender",
    visual: "identity",
    company: "Elements Interactive · Kiwa eWallet",
    contributions: [
      "Served as an Android mobile consultant on Kiwa eWallet.",
      "Implemented secure credential sharing over Bluetooth and NFC.",
      "Worked with ISO 18013-5 standards for mobile credentials.",
    ],
    platforms: ["Android"],
    links: [
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.kiwa.ewallet",
      },
    ],
  },
  {
    slug: "remitx",
    title: "RemitX Customer App",
    category: "FINTECH & REMITTANCE",
    description:
      "Mobile remittance experiences with secure identity verification at their core.",
    tags: ["iOS & Android", "eKYC", "OWASP"],
    color: "rose",
    visual: "wallet",
    company: "Inficare · RemitX",
    contributions: [
      "Built the RemitX Customer App and integrated an eKYC system.",
      "Implemented OWASP Mobile Security practices with successful FSI VAPT approval in Japan, Korea, and Malaysia.",
      "Led end-to-end development across fintech, remittance, and enterprise domains.",
    ],
    platforms: ["iOS", "Android"],
    links: [
      {
        label: "Inficare website",
        url: "https://inficare.com.my/products/remitx",
      },
    ],
  },
  {
    slug: "payx",
    title: "PayX Mobile Wallet",
    category: "EVERYDAY PAYMENTS",
    description:
      "One of the first iOS apps I built at Inficare: a mobile wallet system for everyday payments.",
    platforms: ["iOS"],
    tags: ["iOS", "Mobile wallet"],
    color: "sage",
    visual: "payment",
    company: "Inficare",
    contributions: [
      "Developed PayX Mobile Wallet for iOS.",
      "Helped establish Inficare’s first iOS applications.",
    ],
    links: [
      {
        label: "Inficare website",
        url: "https://inficare.com.my/products/payx",
      },
    ],
  },
  {
    slug: "lugmety",
    title: "Lugmety",
    category: "FOOD & DELIVERY",
    description:
      "Behind every food delivery is a bit of logistics. I worked on the iOS side of Lugmety’s delivery app.",
    platforms: ["iOS"],
    tags: ["iOS", "Delivery logistics"],
    color: "rose",
    visual: "delivery",
    company: "Lugmety",
    contributions: ["Worked on an iOS food delivery logistics app."],
    links: [
      {
        label: "Lugmety website",
        url: "https://lugmety.com/ride-with-us",
      },
    ],
  },
  {
    slug: "smart-nrna",
    title: "Smart NRNA",
    category: "COMMUNITY & CONNECTION",
    description:
      "A community app for Nepali people living abroad, available on iOS and Android.",
    platforms: ["iOS", "Android"],
    tags: ["iOS & Android", "Community"],
    color: "lavender",
    visual: "community",
    company: "Smart NRNA",
    contributions: [
      "Worked on the Smart NRNA community app for iOS and Android.",
    ],
    links: [
      {
        label: "App Store",
        url: "https://apps.apple.com/us/app/smart-nrna/id1544254635",
      },
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.respect.nrna",
      },
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
      "Built RemitX with eKYC and applied OWASP security practices, achieving FSI VAPT approval in Japan, Korea, and Malaysia.",
    ],
  },
  {
    company: "Inficare",
    role: "iOS Developer",
    period: "Jan 2018 — Jun 2019",
    location: "Kathmandu, Nepal",
    highlights: [
      "Built the company’s first iOS apps: PayX and RemitX.",
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
