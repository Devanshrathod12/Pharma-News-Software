/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],






  theme: {
    extend: {
      backgroundImage: {
        'pharma': "url('./assets/phrma.png')", 

      },
      colors:{
        'primary':"#5f6FFF "
        
      },
    },
  },
  plugins: [],
};
