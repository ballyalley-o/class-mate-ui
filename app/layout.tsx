import '@globals'
import type { Metadata } from 'next'
import { Kenia, Oswald } from 'next/font/google'
import { LANG } from '@config'
// @components
import { Navbar, Footer } from '@components'

const kenia = Kenia({
  subsets: ['latin'],
  weight: ['400'],
})
const oswald = Oswald({
  subsets: ['latin'],
  weight: ['200', '300', '500', '700'],
})

export const metadata: Metadata = {
  title: 'ClassMate',
  description: 'Your assistant in learning',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang={LANG.en}>
      <body className={oswald.className}>
        <main className='relative overflow-hidden'>
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
