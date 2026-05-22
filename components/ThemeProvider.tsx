"use client";

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

type Theme = "dark" | "light";

type ThemeContextValue = {
  theme: Theme;
  setTheme: (t: Theme) => void;
  toggle: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

const STORAGE_KEY = "pk_theme";

function applyThemeToHtml(theme: Theme) {
  const html = document.documentElement;
  html.classList.remove("dark", "light");
  html.classList.add(theme);
  // Tailwind dark variant is controlled by `.dark` class.
  if (theme === "dark") html.classList.add("dark");
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    // Initialize from storage/system preference (client-only).
    try {
      const saved = (localStorage.getItem(STORAGE_KEY) as Theme | null) ?? null;
      const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ?? true;
      return saved ?? (prefersDark ? "dark" : "light");
    } catch {
      return "dark";
    }
  });

  useEffect(() => {
    applyThemeToHtml(theme);
  }, [theme]);

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t);
    try {
      localStorage.setItem(STORAGE_KEY, t);
    } catch {
      // ignore (private mode / blocked storage)
    }
  }, []);

  const toggle = useCallback(() => {
    setTheme((theme === "dark" ? "light" : "dark") satisfies Theme);
  }, [setTheme, theme]);

  const value = useMemo<ThemeContextValue>(() => ({ theme, setTheme, toggle }), [theme, setTheme, toggle]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
