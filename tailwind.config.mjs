/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#48D44F',
        secondary: '#033220',
        beige: '#F7ECDC',
        cream: '#FCFCFC',
        dark: '#333333',
        gold: '#FFD25E',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        moul: ['Moul', 'serif'],
        darker: ['Darker Grotesque', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
      },
    },
  },
  plugins: [],
};
