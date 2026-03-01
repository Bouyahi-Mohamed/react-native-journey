/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}", // keep if you plan to add a components folder later
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#030014',
        secondary: '#151312',
        light: {
          100: '#d6c6ff',
          200: '#A8B5DB',
          300: '#9CA4AB',
        },
        dark: {
          100: '#201f3d',
          200: '#0f0d23',
        },
        accent: {
          100: '#AB8BFF',
        }


      }
    },
  },
  plugins: [],
}
