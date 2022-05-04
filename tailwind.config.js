module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    container: {
      center: true,
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    fontSize: {
      xs: ['12px', '18px'],
      sm: ['14px', '20px'],
      base: ['17px', '28px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
      '2xl': ['28px', '36px'],
      '3xl': ['34px', '40px'],
    },
    extend: {
      colors: {
        'grayVeryDark': '#505961',
        'grayLine': '#d8d8d8',
        'grayMedium': '#959a9e',
        'grayTags' : '#959a9e',
        'grayLight' : '#eaeaea',
        'blueGent' : '#009de0',
      },
    },
  },
  plugins: [],
}
