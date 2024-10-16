import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true, 
      padding: {
        DEFAULT: "20px",
        sm:"30px",
        md: "50px",
        lg: "70px",
        xl: "80px",
      },
    },
    
    extend: {},
  },
  plugins: [],
};
export default config;
