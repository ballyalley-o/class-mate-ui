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
        'bg-img': "url('/assets/bg/bg-img-1.jpg')",
        'bg-img-2': "url('/assets/bg/bg-img-2.jpg')",
        'bg-img-3': "url('/assets/bg/bg-img-3.jpg')",
        pattern: "url('/pattern.png')",
        'pattern-2': "url('/assets/images/pattern-bg.png')",
        'pattern-bg': "url('/pattern-bg.png')",
      },
      boxShadow: {
        xs: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1440px',
      },
      fontFamily: {
        kenia: ['Kenia', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
      },
      borderRadius: {
        5: '5px',
        '5xl': '40px',
      },
    },
  },
  plugins: [],
}
export default config
