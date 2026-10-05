import { useCallback, useMemo, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import { ThemeContext } from "./theme-context";
import { tokens } from "./tokens";
import type { Theme } from "./tokens";
function themeStyle(theme: Theme) {
  const values: Record<string, string> = {};
  for (const [key, value] of Object.entries(tokens.colors[theme]))
    values[`--color-${key}`] = value;
  for (const [key, value] of Object.entries(tokens.space))
    values[`--space-${key}`] = value;
  for (const [key, value] of Object.entries(tokens.font))
    values[`--font-${key}`] = value;
  for (const [key, value] of Object.entries(tokens.radius))
    values[`--radius-${key}`] = value;
  values["--layout-max"] = tokens.layout.max;
  for (const [key, value] of Object.entries(tokens.motion))
    values[`--motion-${key}`] = value;
  return values as CSSProperties;
}
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.dataset.theme === "dark" ? "dark" : "light",
  );
  const toggleTheme = useCallback(() => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("portfolio-theme-v1", next);
    } catch {
      /* Storage may be unavailable in private browsing. */
    }
  }, [theme]);
  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);
  return (
    <ThemeContext.Provider value={value}>
      <div className="theme-root" data-theme={theme} style={themeStyle(theme)}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
