import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      josefin: ['"Josefin Sans"', "sans-serif"],
      poppins: ['"Poppins"', "sans-serif"],
    },
    extend: {
      colors: {
        "btn-color": "#5645ff",
      },
      backgroundImage: {
        hero: "url('/big-14.jpg')",
        design: "url('/big-15.jpg')",
        culture: "url('/big-01.jpg')",
        visual: "url('/visual-small-11.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
