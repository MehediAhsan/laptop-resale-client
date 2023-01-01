/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui:{
    themes: [
      {
        mytheme:{
          primary: '#25987F',
          secondary: '#447fba',
          accent: "#3A4256",
          neutral: "#F87171",
          error: "#F42A2A",
          "base-100": "#F7F7F7",
        }
      }
    ]
  },
  theme: {
    extend: {
      fontFamily: {
        'Berkshire': ['Berkshire Swash', 'cursive'],
      }
    },
  },
  plugins: [require("daisyui")],
}