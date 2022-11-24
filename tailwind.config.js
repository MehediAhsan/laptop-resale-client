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
          neutral: "#3D4451",
          error: "#F42A2A",
          "base-100": "#FFFFFF",
        }
      }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}