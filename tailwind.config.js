/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(345deg, hsla(239, 60%, 50%, 1) 14%, hsla(228, 30%, 16%, 1) 64%)',
      },
    },
  },
  plugins: [],
}