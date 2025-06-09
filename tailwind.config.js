/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        khuzama: {
          light: '#F5F0F8',
          DEFAULT: '#9C69E2',
          dark: '#5D3EBC',
        },
      },
      fontFamily: {
        arabic: ['"Noto Naskh Arabic"', 'serif'],
      },
    },
  },
  plugins: [],
}
