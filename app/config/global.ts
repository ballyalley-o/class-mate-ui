import LANG from '@config/lang'

const GLOBAL = {
  api: process.env.NEXT_PUBLIC_API_URL,
  env: process.env.NEXT_PUBLIC_ENV,
  ver: process.env.NEXT_PUBLIC_API_VERSION,
  brand: {
    logo: '/assets/brand/classmate-main.svg',
    logo_secondary: '/assets/brand/classmate-ico.svg',
    man: '/assets/brand/classmate-man.svg',
    text: '/assets/brand/classmate-text.svg',
    icon: {
      32: '/assets/brand/classmate32x32.ico',
      64: '/assets/brand/classmate64x64.ico',
      180: '/assets/brand/classmate180x180.ico',
      svg: '/assets/brand/classmate-ico.svg',
    },
  },
  lang: LANG.en,
}

export default GLOBAL
