/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#010101',
        secondary: '#131313',
        tertiary: '#222222',
        accent: '#f3f3f3'
      }
    }
  },
  plugins: []
}
