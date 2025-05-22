/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2B2F78',
          dark: '#232761',
          light: '#3B4098',
        },
        secondary: {
          DEFAULT: '#FC8019',
        },
        accent: {
          DEFAULT: '#6F42C1',
        },
        success: {
          DEFAULT: '#22C55E',
        },
        warning: {
          DEFAULT: '#FAAD14',
        },
        error: {
          DEFAULT: '#EF4444',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};