module.exports = {
  mode: 'jit',
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'], // remove unused styles in production
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
    gridTemplateColumns: {
      // default value
      'none': 'none',
      '15': 'repeat(15, minmax(0, 1fr))',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
