"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    // Avoid hydration mismatches
    return (
      <button
        aria-label="Toggle theme"
        className="h-9 rounded-xl px-3 opacity-0 pointer-events-none"
      />
    );
  }

  const current = theme === "system" ? systemTheme : theme;
  const isDark = current === "dark";

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="h-9 rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-md px-3 text-sm font-medium shadow-sm hover:shadow transition"
    >
      {isDark ? "Light" : "Dark"}
    </button>
  );
}
