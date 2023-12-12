import '@globals'
import type { Metadata } from 'next'
import { Kenia, Staatliches, Roboto } from 'next/font/google'
import { LANG } from '@config'
// @clerk
import { ClerkProvider, auth } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
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
  const { userId } = auth()
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
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
