import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'hero-bg-mobile': "url('../public/background-mobile.jpg')",
        'hero-bg-desktop': "url('../public/background-desktop.jpg')",
      }
    },
  },
  plugins: [],
} satisfies Config;
