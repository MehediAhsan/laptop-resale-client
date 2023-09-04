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
          neutral: "#EF4444",
          error: "#F42A2A",
          "base-100": "#F7F7F7",
        }
      },
      {
        dark: {
          
          "primary": "#DBEDF3",
                   
          "secondary": "#00ADB5",
                   
          "accent": "#c9ffb2",
                   
          "neutral": "#00ADB5",
                   
          "base-100": "#0C0C0C",
                   
          "info": "#48A1EA",
                   
          "success": "#168D46",
                   
          "warning": "#F7B02B",
                   
          "error": "#FD6384",
        }
      }
    ]
  },
  theme: {
    extend: {
      fontFamily: {
        'Berkshire': ['Berkshire Swash', 'cursive'],
        'Lato': ['Lato', 'sans-serif']
      }
    },
  },
  plugins: [require("daisyui")],
}