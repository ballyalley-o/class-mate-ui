import '@globals'
import type { Metadata } from 'next'
import { Kenia, Chathura } from 'next/font/google'
import { LANG } from '@config'
// @components
import { Navbar } from '@components'

const kenia = Kenia({
  subsets: ['latin'],
  weight: ['400'],
})
const chathura = Chathura({
  subsets: ['latin'],
  weight: ['100', '300', '400'],
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
      <body className={kenia.className}>
        <main className='max-w-10xl mx-auto'>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  )
}
