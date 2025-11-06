/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
    "./pages/**/*.{js,jsx,ts,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#16a34a",
          dark: "#0b1720"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,.10)"
      },
      borderRadius: {
        xxl: "1.5rem"
      }
    }
  },
  plugins: []
};
