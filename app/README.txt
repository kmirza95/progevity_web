Progevity UI Restore Pack
--------------------------------
Includes Tailwind CSS and PostCSS configuration plus global styles.

1. Move `globals.css` to your app/ directory (replace old file).
2. Move `tailwind.config.js` and `postcss.config.js` to your project root.
3. Ensure the top of app/layout.jsx includes:
   import "./globals.css";
4. Run:
   npm install tailwindcss postcss autoprefixer
5. Restart server:
   npm run dev
