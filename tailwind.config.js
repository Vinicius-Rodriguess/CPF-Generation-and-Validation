/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        darkBlue: '#0D47A1',
        lightBlueGreen: '#00BFA5',
        customWhite: 'rgba(255, 255, 255, 0.6)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.valid': {
          backgroundColor: "#aeffae",
          border: "1px solid green",
        },
        '.error': {
          backgroundColor: "#ffd1d1",
          border: "1px solid rgb(255, 0, 0)",
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}
