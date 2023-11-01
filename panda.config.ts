import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  // https://park-ui.com/docs/panda/overview/getting-started
  presets: ["@pandacss/preset-base", "@park-ui/panda-preset"],
  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },
  jsxFramework: "react",

  // The output directory for your css system
  outdir: "styled-system",
});
