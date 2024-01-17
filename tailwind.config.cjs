/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "ws-green": "#00cc55",
        "ws-green-dark": "#0a5328",
        "ws-green-light": "#66e099",
        "ws-magenta": "#fd337f",
        "ws-magenta-dark": "#7e193f",
        "ws-magenta-light": "#fe99bf",
        "ws-blue": "#8b00e9",
        "ws-blue-dark": "#450074",
        "ws-blue-light": "#d099f6",
        "ws-yellow": "#eea800",
        "ws-yellow-dark": "#5f4300",
        "ws-yellow-light": "#f8dc99",
        //
        "ws-black": "#1a1a1a",
        "ws-grey": "#9c9c9c",
        "ws-grey-dark": "#2f2f2f",
        "ws-grey-light": "#d4d4d4",
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/nesting')],
}