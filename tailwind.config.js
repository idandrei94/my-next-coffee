module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'coffee-pattern': "url('/static/coffee-10.svg')",
      },
      colors: {
        'coffee-green': '#2f3b35',
        'coffee-green-light': '#5b8457',
        'coffee-600': '#6b511e',
        'coffee-300': '#ddd6c4',
        'coffee-100': '#e6e1d4',
        'coffee-50': '#f0ece4',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};

// #48663d, #444d45, #5b8457
