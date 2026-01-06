/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#0B0F14",
        surface: "#0F1621",
        neon: "#3CF2FF",
        violet: "#7C7CFF",
        glow: "rgba(60,242,255,0.35)"
      }
    }
  },
  plugins: []
};
