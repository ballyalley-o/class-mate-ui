import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          default: '#FF751A',
          yellow: '#FFFC53',
        },
        secondary: '#C146E8',
        'gray-200': '#EAECF0',
        'gray-300': '#D0D5DD',
        'gray-500': '#667085',
        'gray-600': '#475467',
        'gray-700': '#344054',
        'gray-900': '#101828',
        'white-100': '#F4F4F4',
        'white-200': '#EDF0F8',
        'black-100': '#3D4258',
        'neutral-black': '#23263B',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        xs: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
      },
      maxWidth: {
        '10xl': '1440px',
      },
      fontFamily: {
        kenia: ['Kenia', 'sans-serif'],
        chathura: ['Chathura', 'sans-serif'],
      },
      borderRadius: {
        5: '5px',
      },
    },
  },
  plugins: [],
}
export default config
