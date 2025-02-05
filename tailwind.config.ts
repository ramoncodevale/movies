/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7300FF",
        "dark-bg": "#1A0B28",
        white: "#FFFFFF",
        glass: "#594D5B",
        "star-color": "#FFC700",
        black: "#000000",

        background: "var(--background)",
        foreground: "var(--foreground)",
        card: "var(--card)",
        "card-foreground": "var(--card-foreground)",
        border: "var(--border)",
        input: "var(--input)",
      },
      borderRadius: {
        custom: "0.5rem",
      },
      spacing: {
        "custom-padding": "1rem",
      },
    },
  },
  plugins: [],
}
