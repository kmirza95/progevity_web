"use client";

import { ThemeProvider } from "next-themes";

/**
 * AppThemeProvider
 * Wraps the app to enable light/dark/system themes via next-themes.
 * - attribute="class" applies the theme as a CSS class on <html>
 * - defaultTheme="system" respects the OS preference first-load
 * - disableTransitionOnChange prevents flashing during toggle
 */
export default function AppThemeProvider({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
