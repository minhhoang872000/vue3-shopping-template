import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  darkMode: "class",
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans"],
        signs: ["Agiary Signs"],
        abril: ["Abril Fatface"]
      },
      container: {
        center: true,
        padding: "1rem",
        width: "1200px",
        screens: {
          xl: "1200px",
        },
      },
      colors: {
        main: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        anchor: "var(--color-anchor)",
        effect: "var(--color-effects)",
      },
      fontSize: {
        sm: "16px",
      },
      boxShadow: {
        xl: "0px 4px 0px 0px #DDE9E4",
      },
      screen: {
        tl: "900px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
