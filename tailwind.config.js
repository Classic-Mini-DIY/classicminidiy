/** @type {import('tailwindcss').Config} */

import daisyui from 'daisyui';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  plugins: [daisyui],

  theme: {
    fontFamily: {
      logo: ['Fredoka One'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
        160: '40rem',
        192: '48rem',
        224: '56rem',
      },
    },
  },
  daisyui: {
    themes: [
      {
        UltraLog: {
          primary: '#71784E',
          secondary: '#F6F7EB',
          accent: '#BF4E30',
          info: '#476C9B',
          success: '#9FA677',
          warning: '#FDC149',
          error: '#871E1C',
        },
      },
    ],
  },
};
