/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        theme: '#fe7a40',
        secondary:'#fd225c',
        textColor:'#6e6e6e',
        titleColor:'#222222',
        bgSecondary:'#f7f7f7'
      },
      fontFamily:{
        poppins: ['Poppins', 'sans-serif'],
        syne:['Syne', 'sans-serif'],
        blackOps:['Black Ops One','sans-serif']
      },
      backgroundImage:{
        customGradient : 'linear-gradient(90deg, #fd225c 1.12%, #fe7a40);',
        customGradient2 : 'linear-gradient(90deg, #fe7a40 1.12%, #fd225c);'
      },
      width:{
        cardWidth:'420px',
        dashedRound:'700px',
        dasedShortRound:'500px',
        colourCircle:'250px'
      },
      height:{
        dashedRound:'700px',
        dasedShortRound:'500px',
        colourCircle:'250px'
      }
    },
  },
  plugins: [],
}