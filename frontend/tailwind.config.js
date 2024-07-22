/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "pink50": "#fdf3f4",
        "pink100": "#fbe8eb",
        "pink200": "#f6d5da",
        "pink300": "#ea9daa",
        "pink400": "#e58799",
        "pink500": "#d75c77",
        "pink600": "#c13d60",
        "pink700": "#a22e4f",
        "pink800": "#882947",
        "pink900": "#752642",
        "pink950": "#411020"
      }
    },
  },
  plugins: [require("daisyui")],
}

