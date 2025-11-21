/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // class-based dark mode
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#f97316", // orange-500
          secondary: "#facc15", // yellow-400
          darkBg: "#0b0c10", // dark background
          lightBg: "#ffffff", // light background
          lightText: "#000000", // light mode text
          darkText: "#ffffff", // dark mode text
        },
      },

      keyframes: {
        fadeSlideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        modalIn: {
          "0%": { opacity: "0", transform: "scale(0.85)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },

      animation: {
        fadeSlideUp: "fadeSlideUp 0.8s ease-out forwards",
        fadeSlideUpDelay200: "fadeSlideUp 0.8s ease-out 0.2s forwards",
        fadeSlideUpDelay400: "fadeSlideUp 0.8s ease-out 0.4s forwards",
        slideDown: "slideDown 0.3s ease-out forwards",
        modalIn: "modalIn 0.25s ease-out",
      },
    },
  },
  plugins: [],
};
