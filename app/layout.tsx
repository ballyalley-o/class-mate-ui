import '@globals'
import type { Metadata } from 'next'
import { Kenia, Staatliches, Roboto } from 'next/font/google'
// @redux
import { Providers } from '@lib/provider'
// @clerk
import { ClerkProvider, auth } from '@clerk/nextjs'
// @components
import { Navbar, Footer } from '@components'
// @constants
import { SETTING, LANG } from '@config'

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
    <ClerkProvider appearance={JSON.parse(JSON.stringify(SETTING.appearance))}>
      <html lang={LANG.en}>
        <body className={roboto.className}>
          <main className='relative overflow-hidden'>
            <Navbar auth={userId} />
            <Providers>{children}</Providers>
            <Footer />
          </main>
        </body>
      </html>
    </ClerkProvider>
  )
}
