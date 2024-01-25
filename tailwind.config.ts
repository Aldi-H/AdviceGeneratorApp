/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  content: [],
  theme: {
    extend: {
      colors: {
        primaryLightCyan: "hsl(193, 38%, 86%)",
        primaryNeonGreen: "hsl(150, 100%, 66%)",
        neutralGrayishBlue: "hsl(217, 19%, 38%)",
        neutralDarkGrayishBlue: "hsl(217, 19%, 24%)",
        neutralDarkBlue: "hsl(218, 23%, 16%)",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
    },
  },
  plugins: [],
};
