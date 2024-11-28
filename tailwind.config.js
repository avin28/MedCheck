/** @type {import('tailwindcss').Config} */
import daisyui from './node_modules/daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
 
  ],
  theme: {
    colors: {
      'blue':'#152238',
      'yellow':'#F1BF50',
      'white':'#FFFFFF',
    },
    extend: {},
  },
  plugins: [daisyui],


}

