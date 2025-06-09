module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        khuzama: "#7e5bef",
        "khuzama-light": "#f4f0ff",
        "khuzama-dark": "#5b3fc4",
      },
      fontFamily: {
        arabic: ["'Noto Kufi Arabic'", "sans-serif"],
      },
    },
  },
  plugins: [],
}