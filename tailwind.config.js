module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'coffee-pattern': "url('/static/coffee-20.svg')",
      },
      colors: {
        'coffee-green': '#2f3b35',
        'coffee-brown': '#6b511e',
        'coffee-light-brown': '#ddd6c4',
      },
    },
  },
  plugins: [],
};
