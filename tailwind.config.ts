import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
      },
      fontFamily: {
        // 'sans': ['Poppins', '"Changa One"', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'changa': ['"Changa One"', 'sans-serif'],
        'inter': ['Inter', 'sans-serif']
      },
      colors: {
        'orange': '#FF4F4F',
        'kuning': '#FFDE65',
        'pastel': '#FFFAED',
        'merah': '#EB191D',
        'itam': '#2C2C2C',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    screens: {
      '2xl': { 'max': '1535px' },
      'xl': { 'max': '1279px' },
      'lg': { 'max': '1023px' },
      'md': { 'max': '767px' },
      'sm': { 'max': '639px' },
    },
  },
  plugins: [],
}
export default config
