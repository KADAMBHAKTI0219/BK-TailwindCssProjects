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
        dashedRound:'650px',
        dasedShortRound:'500px',
        colourCircle:'250px'
      },
      height:{
        dashedRound:'650px',
        dasedShortRound:'500px',
        colourCircle:'250px'
      },
      animation:{
        animationScale:'animationScale 3s linear infinite',
        animationRotate:'animationRotate 10s linear infinite',
        
      },
      keyframes:{
        animationScale:{
          '0%, 100%': { transform: 'scale(1.1)' },
          '50%':{transform:'scale(1)'}
        },
        animationRotate:{
          '0%': { transform: 'rotate(0deg)' },
          '50%':{transform :'rotate(180deg)'},
          '100%':{transform :'rotate(360deg)'}
        }
      }
    },
  },
  plugins: [],
}