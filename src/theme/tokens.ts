export const tokens = {
  font: {
    sans: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    serif: 'Georgia, "Times New Roman", serif',
    mono: '"SFMono-Regular", Consolas, monospace',
  },
  space: {
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    6: "1.5rem",
    8: "2rem",
    12: "3rem",
    16: "4rem",
    24: "6rem",
  },
  radius: { small: "0.5rem", card: "1.25rem", pill: "999px" },
  layout: { max: "1200px" },
  motion: { fast: "180ms", normal: "300ms" },
  colors: {
    light: {
      bg: "#f7f7f0",
      surface: "#ffffff",
      text: "#242b25",
      muted: "#63695f",
      border: "#dedfd4",
      accent: "#465735",
      accentSoft: "#e8eddb",
    },
    dark: {
      bg: "#191e19",
      surface: "#232b23",
      text: "#f0f1e7",
      muted: "#b2b9aa",
      border: "#3a4537",
      accent: "#c6d8a2",
      accentSoft: "#303e28",
    },
  },
} as const;
export type Theme = keyof typeof tokens.colors;
