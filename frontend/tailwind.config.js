/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bb': '#2D2D2D',
      },
      fontFamily: {
        'DMSans': 'DM Sans',
        'DMSerif': 'DM Serif Display'
      },
    },
  },
  plugins: [],
}