/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   mode: 'jit',
   purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
   theme: {
      extend: {},
   },
   plugins: [],
};
