/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
    "./pages/**/*.{js,jsx,ts,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#16a34a",
          dark: "#0b1720",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,.10)",
        card: "0 6px 24px rgba(0,0,0,.12)",
      },
      borderRadius: {
        xxl: "1.5rem",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: 0, transform: "translateY(8px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in .6s ease-out both",
      },
    },
  },
  plugins: [],
};
