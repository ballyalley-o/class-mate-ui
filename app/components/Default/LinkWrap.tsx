import { ReactNode } from 'react'
import Link from 'next/link'

interface LinkWrap {
  href: string
  content: ReactNode
}

const LinkWrap = ({ href, content }: LinkWrap) => {
  return (
    <Link
      href={href}
      className='text-white hover:text-gray-300 mr-4 light-14 hover:regular-18 transition-all ease-in-out'
    >
      {content}
    </Link>
  )
}

export default LinkWrap
