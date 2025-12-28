/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins_Bold : ['Poppins-Bold', 'sans-serif'],
        Poppins_SemiBold : ['Poppins-SemiBold', 'sans-serif'],
        Poppins_Medium : ['Poppins-Medium', 'sans-serif'],
        Poppins_Regular : ['Poppins-Regular', 'sans-serif']
      },
      colors: {
        BlueC: 'hsl(180, 66%, 49%)',
        PurpleC: 'hsl(257, 27%, 26%)',
        RedC: 'hsl(0, 87%, 67%)',
        GrayC: {
          400: 'hsl(0, 0%, 75%)',
          500: 'hsl(257, 7%, 63%)',
          600: 'hsl(255, 11%, 22%)',
          700: 'hsl(260, 8%, 14%)'
        }
      },
      backgroundImage: {
        'herobg' : "url('/images/bg-shorten-desktop.svg')",
        'boostbg' : "url('/images/bg-boost-desktop.svg')",
      }
    },
  },
  plugins: [],
}

