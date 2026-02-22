import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        terracotta: {
          DEFAULT: "#C65D3E",
          light: "#D4745A",
          dark: "#A84B30",
          subtle: "#FDF0EB",
        },
        forest: {
          DEFAULT: "#2D4739",
          light: "#3D5C4A",
          dark: "#1E3027",
        },
        brass: {
          DEFAULT: "#C5A572",
          light: "#D4BC93",
          dark: "#A88A55",
        },
        cream: "#FAF7F2",
        charcoal: "#1A1A1A",
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
