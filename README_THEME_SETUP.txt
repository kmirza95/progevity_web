Progevity — Theme Provider & Toggle (next-themes)
=================================================

This package contains the exact files to enable a working light/dark theme
toggle using `next-themes`. Drop these into your project and run the one-time
install command below.

Files included (relative to your repo root):
--------------------------------------------
• app/theme-provider.jsx        (NEW)  — Theme context wrapper
• app/layout.jsx                (REPLACE) — Wraps app with ThemeProvider
• components/ThemeSwitch.jsx    (NEW)  — Button to toggle themes

1) Install dependency (once):
   npm i next-themes

2) Copy the files:
   - Place `app/theme-provider.jsx` and `components/ThemeSwitch.jsx` as-is.
   - Replace your existing `app/layout.jsx` with the provided one (it simply
     wraps the body with the ThemeProvider).

3) Use the toggle in your Navbar:
   - Ensure your Navbar is a client component: add "use client" at the top.
   - Import and render the switch:
       import ThemeSwitch from "@/components/ThemeSwitch";
       ...
       <ThemeSwitch />

4) Tailwind dark mode setting (confirm in tailwind.config.js):
       module.exports = {
         darkMode: "class",
         content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
         theme: { extend: {} },
         plugins: [],
       };

5) Run the dev server:
   npm run dev

Notes
-----
• `suppressHydrationWarning` on <html> prevents a benign mismatch the first
  time the theme class is applied.
• The switch avoids SSR flashing by rendering only after mount.
