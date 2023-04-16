/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spinrotate':'spin 8s linear infinite',
        keyframes:{
        'spinrotate':{}
        }
      }
    },
  },
  plugins: [],
}

