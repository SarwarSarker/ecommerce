module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBlue:  '#00CAD7',
        lightGreen: '#03484D',
        darkGreen: '#0E3B3E',
        lightyellow: '#FDDE3B',
      }
    },
  },
  plugins: [],
}

