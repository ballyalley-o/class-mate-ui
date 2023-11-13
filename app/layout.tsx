import '@globals'
import type { Metadata } from 'next'
import { Kenia, Chathura } from 'next/font/google'
import { LANG } from '@config'

const kenia = Kenia({
  subsets: ['latin'],
  weight: ['400'],
})
const chathura = Chathura({
  subsets: ['latin'],
  weight: ['400'],
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
      <body className={kenia.className}>{children}</body>
    </html>
  )
}
