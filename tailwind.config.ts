import type { Config } from "tailwindcss";

export default {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#19231A",
        white: "#EFE7DA",
        brown: "#311E10",
        blue: "#7D84B2",
        green: "#1A936F",
        orange: "#DD6031",
        yellow: "#FFEE93",
        purple: "#832161",
      },
    },
  },
  plugins: [],
} satisfies Config;
