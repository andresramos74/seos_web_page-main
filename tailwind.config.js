/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    gridTemplateColumns:{
      'fill-40': 'repeat(auto-fill, minmax(200px, 1fr))'
    },
    screens:{
      'sm':'450px',
      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
    },
    colors:{
      'seos-blue':{
        'dark': '#00314d',
        'light': '#00a0bc'
      },
      'seos-green':'#009638',
      'seos-yellow':'#f8c301',
      'seos-orange':'#f15a24',
      'black': '#000000',
      'white': '#ffffff',
      'gray': '#9ca3af',
      'red-warning' : '#ef4444',
      'slay-bg': '#fafafa',
      'transparent': 'transpaent'
    },
    extend: {},
  },
  plugins: [],
}
