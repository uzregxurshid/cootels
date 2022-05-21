module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['Inter', 'Arial', 'sans-serif'],
        Montserrat: ['Montserrat', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'base': {
          fontSize: '16px',
          lineHeight: '19px'
        },
        'main':['18px', '27px'],
        'h2':['36px','54px'],
        'h3':['24px','36px'],
      },
      color:{
        
      }
      
    },
  },
  plugins: [],
}
