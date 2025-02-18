/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        dark: "var(--text-dark)",
        bg: "var(--bg-default)",
        light: "var(--bg-light)",
        secondary: "var(--half-white)",
        card: "var(--bg-card)",
        border: "var(--border)",
        alert: "var(--alert)",
        "alert-icon": "var(--alert-icon)",
        select: "var(--select)",
        "card-border": "var(--card-border)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
