'use client'

import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import * as _ from '@assets/styles/navbar'
import NavBrand from '@components/Navbar/NavBrand'
// @clerk
import { UserButton, auth } from '@clerk/nextjs'
import { Button, LinkWrap } from '@components'
import { NAV } from '@constants'

type Navbar = {
  auth?: string | null
}

const Navbar: React.FC<Navbar> = ({ auth }: Navbar) => {
  const [isMobileMenu, setIsMobileMenu] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement | null>(null)

  const toggleMobileMenu = () => {
    setIsMobileMenu((prevState) => !prevState)
  }

  const handleMenuButtonClick = () => {
    if (isMobileMenu) {
      closeMobileMenu()
    } else {
      toggleMobileMenu()
    }
  }

  const closeMobileMenu = () => {
    setIsMobileMenu(false)
  }

  useEffect(() => {
    // TODO: when currently on dropdown, if i click the menu again, retract the dropdown
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        closeMobileMenu()
      }
    }

    if (isMobileMenu) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMobileMenu])

  return (
    <nav className={_.StyledNav} style={{ position: 'relative' }}>
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
        {!auth ? (
          <Link href='/sign-in'>
            <Button
              title='SIGN IN'
              icon='rocket'
              type='button'
              variant='btn_dark_green'
              w={18}
              h={18}
              // className='inline-block cursor'
            />
          </Link>
        ) : (
          <LinkWrap href='/profile' content='Profile' />
        )}
        <div className='ml-auto'>
          <UserButton afterSignOutUrl='/' />
        </div>
      </div>

      {/* TODO: dropdown mobile menu for navbar items */}
      {/* mobile menu */}

      <div
        onClick={handleMenuButtonClick}
        className='cursor-pointer lg:hidden z-51'
        style={{ position: 'relative', zIndex: 51 }}
      >
        {isMobileMenu ? (
          <Image
            src='/assets/svg/up.svg'
            alt='menu-mobile'
            width={32}
            height={32}
            className='inline-block'
          />
        ) : (
          <Image
            src='/assets/svg/menu-sm.svg'
            alt='menu-mobile'
            width={32}
            height={32}
            className='inline-block'
          />
        )}
      </div>

      {/* mobile dropdown */}
      {isMobileMenu && (
        <div
          ref={mobileMenuRef}
          className={`absolute top-0 left-0 w-full bg-black/60 z-50 pt-10  backdrop-filter backdrop-blur-md transition-transform duration-300 transform ${
            isMobileMenu ? 'translate-y-0' : 'translate-y-full'
          }`}
          style={{
            boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.5)',
          }}
        >
          {/* TODO: Blur the entire page under the dropdown when pressed */}
          <ul className='lg:hidden ml-5'>
            {NAV.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className='light-14 hover:regular-18 text-gray-500  hover:text-gray-100 flex-start cursor-pointer pb-1 transition-all ease-in-out'
                onClick={(event: React.MouseEvent) => {
                  event.preventDefault()
                  closeMobileMenu()
                }}
              >
                <div className='h-12'> {link.label}</div>
              </Link>
            ))}
            <hr className='bg-gray-700' />
            {!auth ? (
              <li>
                <Link href='/sign-in'>
                  <Button
                    title='SIGN IN'
                    icon='rocket'
                    type='button'
                    variant='btn_dark_green'
                    w={18}
                    h={18}
                  />
                </Link>
              </li>
            ) : (
              <div className='flex flex-row space-x-3 gap-2 m-5'>
                <span>
                  <li>
                    <UserButton afterSignOutUrl='/' />
                  </li>
                </span>
                <li>
                  <LinkWrap href='/profile' content='Profile' />
                </li>
              </div>
            )}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
