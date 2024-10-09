/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './src/**/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#A5D8F5',  // Lighter blue
          500: '#097FE4',  // Bright blue
          600: '#0869CD',  // Darker blue
        },
        secondary: {
          DEFAULT: '#01C4FF', // Cyan
          100: '#01B4FF',    // Lighter Cyan
          200: '#01A4FF',    // Slightly darker Cyan
        },
        black: {
          DEFAULT: '#111827',  // Darker black for UI
          100: '#2E3A45',      // Soft dark for backgrounds
          200: '#374151',      // Medium gray-black
        },
        gray: {
          100: '#E5E7EB',  // Light gray for borders
          200: '#D1D5DB',  // Slightly darker gray
          400: '#9CA3AF',  // Placeholder text gray
          800: '#4B5563',  // Text gray
        },
        background: {
          300: '#FAFAFA',  // Very light background color for the UI
        },
        'white-lighter': '#FFFFFF80', // Semi-transparent white
      },
      fontFamily: {
        pthin: ['Poppins-Thin', 'sans-serif'],
        pextralight: ['Poppins-ExtraLight', 'sans-serif'],
        plight: ['Poppins-Light', 'sans-serif'],
        pregular: ['Poppins-Regular', 'sans-serif'],
        pmedium: ['Poppins-Medium', 'sans-serif'],
        psemibold: ['Poppins-SemiBold', 'sans-serif'],
        pbold: ['Poppins-Bold', 'sans-serif'],
        pextrabold: ['Poppins-ExtraBold', 'sans-serif'],
        pblack: ['Poppins-Black', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
