import '@globals'
import type { Metadata } from 'next'
import { Kenia, Staatliches, Roboto } from 'next/font/google'
import { LANG } from '@config'
// @clerk
import { ClerkProvider, auth } from '@clerk/nextjs'
import { dark, neobrutalism, shadesOfPurple } from '@clerk/themes'
// @components
import { Navbar, Footer } from '@components'

const kenia = Kenia({
  subsets: ['latin'],
  weight: ['400'],
})
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '500', '700'],
})

const staatliches = Staatliches({
  subsets: ['latin'],
  weight: ['400'],
})

export const metadata: Metadata = {
  title: 'ClassMate',
  description: 'Your assistant in learning',
  icons: {
    icon: '/classmate.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { userId, session } = auth()
  return (
    <ClerkProvider
      // REFACTOR:
      appearance={{
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
      }}
    >
      <html lang={LANG.en}>
        <body className={roboto.className}>
          <main className='relative overflow-hidden'>
            <Navbar auth={userId} />
            {children}
            <Footer />
          </main>
        </body>
      </html>
    </ClerkProvider>
  )
}
