# Progevity UI v3 — Drop-in Patch

## What this includes
- `components/Navbar.jsx`: sticky translucent navbar with active link + Book + theme toggle.
- `components/ThemeSwitch.jsx`: lightweight theme switch (no external packages).
- `components/HeroVideo.jsx`: background hero video with graceful fallback.
- `components/Card.jsx`: simple card component.
- `app/layout.jsx`: global layout wiring the navbar + footer.
- `app/page.jsx`: home with hero video + feature cards.
- `app/our-services/page.jsx`: services grid with clearer call-to-actions.
- `app/about-progevity/page.jsx`: mission/ethos + flow.
- `app/globals.css`: tokens + light/dark themes + components styling.
- `public/hero-home.jpg`: placeholder poster image. Replace/add `public/hero-home.mp4` for video.

## Install
1. Unzip at your project root (where your existing `app/` and `components/` live). Allow it to **replace** same‑named files.
2. Make sure you have a hero video at `public/hero-home.mp4` (H.264/AAC, ~5–15MB). Otherwise the image fallback will appear.
3. `npm run dev`.

## Notes
- This patch does **not** require `tailwindcss` or `next-themes` to work. It uses vanilla CSS with design tokens.
- If you already use Tailwind, this CSS will peacefully coexist.
- You can customize colors by editing the CSS variables at the top of `app/globals.css`.
