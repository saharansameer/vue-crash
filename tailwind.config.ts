import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: {
    files: [
      "./index.html",
      "./src/**/*.{vue,ts,tsx}"
    ],
  },
  theme: {},
  plugins: [],
};

export default config;