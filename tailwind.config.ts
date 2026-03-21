import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-outfit)", "sans-serif"],
        serif: ["var(--font-lora)", "serif"],
      },
      colors: {
        sandstone: {
          50: '#FDFBF7',
          100: '#F3EFE6',
          200: '#E8DECB',
        },
        charcoal: {
          800: '#33302E',
          900: '#1C1A19',
        },
        saffron: {
          400: '#FF9933',
          500: '#FF7F00',
          600: '#E66A00',
        },
        terracotta: {
          500: '#CD5C5C',
          600: '#B04A4A',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
