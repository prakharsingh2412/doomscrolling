/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{svelte,js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        lapis: '#33658a',
        carolina: '#86bbd8',
        moss: '#758e4f',
        yellow: '#f6ae2d',
        orange: '#f26419',
      }
    },
  },
  plugins: [],
}


