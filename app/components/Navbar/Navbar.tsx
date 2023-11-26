import Image from 'next/image'
import Link from 'next/link'
import * as _ from '@assets/styles/navbar'
import NavBrand from './NavBrand'
import { Button } from '@components'
import { NAV } from '@constants'

const Navbar = () => {
  return (
    <nav className={_.StyledNav}>
      <NavBrand />
      <ul className='hidden h-full gap-12 lg:flex'>
        {NAV.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className='light-14 hover:regular-18 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all ease-in-out'
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className='lg:flexCenter hidden'>
        <Button
          title='SIGN IN'
          icon='rocket.svg'
          type='button'
          variant='btn_dark_green'
          w={18}
          h={18}
          // className='inline-block cursor'
        />
      </div>

      <Image
        src='/assets/svg/menu-sm.svg'
        alt='menu-mobile'
        width={32}
        height={32}
        className='inline-block cursor-pointer lg:hidden'
      />
    </nav>
  )
}

export default Navbar
