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
        blau: {
          500: '#007DFF',
        },
        indigo: {
          450: '#7986CB',
        },
        mono: {
          100: '#F5F5F5',
          900: '#20232A',
        },
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
export default config;
