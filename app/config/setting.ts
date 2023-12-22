import { dark, neobrutalism, shadesOfPurple } from '@clerk/themes'

const SETTING = {
  appearance: {
    variables: { colorPrimary: 'red' },
    baseTheme: dark,
    signIn: {
      variables: { colorPrimary: 'red' },
    },
    elements: {
      formButtonPrimary: {
        fontSize: 14,
        color: '#000',
        textTransform: 'uppercase',
        backgroundColor: '#FFF',
        '&:hover, &:focus, &:active': {
          backgroundColor: '#000',
          color: '#FFF',
        },
      },
    },
    layout: {
      socialButtonsPlacement: 'top',
      socialButtonsVariant: 'iconButton',
      termsPageUrl: 'https://clerk.com/terms',
      logoPlacement: 'outside',
      logoImageUrl: '/assets/brand/classmate-ico.svg',
      shimmer: true,
    },
  },
}

export default SETTING
