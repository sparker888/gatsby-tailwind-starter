module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ["'Futura PT Condensed'", "Arial", "sans-serif"],
        'serif' : ["Merriweather", "serif"],
        'display': ["'Myriad Pro'", "Arial", "sans-serif"],
        'body': ["'Open Sans'", "sans-serif"],
        'mono' : ["'Base Mono Wide", "monospace"]
      }
    },
  },
  plugins: [],
}