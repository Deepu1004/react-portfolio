/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Enable dark mode with class strategy
  theme: {
    extend: {
      animation: {
        shimmer: "shimmer 4s infinite",
        float: "float 3s ease-in-out infinite",
        pulse: "pulse 2s ease-in-out infinite",
        bounce: "bounce 2s ease infinite",
        scaleIn: "scaleIn 0.8s ease forwards",
        slideInUp: "slideInUp 0.8s ease forwards",
        slideInLeft: "slideInLeft 0.8s ease forwards",
        slideInRight: "slideInRight 0.8s ease forwards",
        fadeIn: "fadeIn 1s ease forwards",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
