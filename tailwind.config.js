module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // For the best performance and to avoid false positives,
    // be as specific as possible with your content configuration.
  ],
  theme: {
    fontFamily: {
      sans: ['Encode Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        'baby-blue': '#f4f8fb',
      },
    },
  },
}
