'use client'

import React, { useEffect, useState, useRef, Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import * as _ from '@assets/styles/navbar'
import NavBrand from '@components/Navbar/NavBrand'
import { Menu, Transition } from '@headlessui/react'
import { motion } from 'framer-motion'
// @clerk
import { UserButton, auth } from '@clerk/nextjs'
import { Button, LinkWrap } from '@components'
import { NAV } from '@constants/routes'
// @utils
import classNames from 'classnames'
import { delay } from '@utils'

type Navbar = {
  auth?: string | null
  actor?: null
}

const Navbar: React.FC<Navbar> = ({ auth, actor }: Navbar) => {
  const [isMobileMenu, setIsMobileMenu] = useState(false)
  const [isUserBtn, setIsUserBtn] = useState(false)
  const [isOpen, setIsOpen] = useState<{ [key: string]: boolean }>({})

  const mobileMenuRef = useRef<HTMLDivElement | null>(null)
  const userProfileRef = useRef<HTMLDivElement | null>(null)

  const handleHoverEnter = (key: any) => {
    setIsOpen((prev) => ({
      ...prev,
      [key]: true,
    }))
  }

  const handleHoverLeave = () => {
    setIsOpen({})
  }

  const toggleMobileMenu = () => {
    setIsMobileMenu((prevState) => !prevState)
  }

  const closeMobileMenu = () => {
    setIsMobileMenu(false)
  }

  useEffect(() => {
    // TODO: when currently on dropdown, if i click the menu again, retract the dropdown
    const handleClickOutside = (event: MouseEvent) => {
      const clickedElement = event.target as Node
      if (
        isMobileMenu &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(clickedElement) &&
        userProfileRef.current &&
        !userProfileRef.current.contains(clickedElement)
      ) {
        toggleMobileMenu()
      }
    }

    if (isMobileMenu && !isUserBtn) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMobileMenu, isUserBtn])

  return (
    <nav className={_.StyledNav} style={{ position: 'relative' }}>
      <NavBrand />
      <ul className='hidden h-full gap-12 lg:flex'>
        {NAV.map((link) => (
          <div
            key={link.key}
            className='light-14 hover:regular-24 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all ease-in-out'
            // onMouseEnter={() => handleHoverEnter(link.key)}
            // onMouseLeave={() => handleHoverLeave()}
          >
            <Menu
              as='div'
              key={link.key}
              className='relative inline-block text-left'
            >
              {/* FIXME: hydration error coming from here */}
              {link.subItems.length > 0 ? (
                <Menu.Button className='inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-md text-gray-200 shadow-sm'>
                  {link.label}
                </Menu.Button>
              ) : (
                <Menu.Button className='inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-md text-gray-200 shadow-sm'>
                  <Link href={link.href}>{link.label}</Link>
                </Menu.Button>
              )}

              {link.subItems && link.subItems.length > 0 && (
                <Transition
                  as={Fragment}
                  enter='transition ease-out duration-100'
                  enterFrom='transform opacity-0 scale-95'
                  enterTo='transform opacity-100 scale-100'
                  leave='transition ease-in duration-75'
                  leaveFrom='transform opacity-100 scale-100'
                  leaveTo='transform opacity-0 scale-95'
                >
                  <Menu.Items className='absolute right-0 z-10 mt-2 w-64 origin-top-right rounded-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                    {link.subItems.map((sub) => (
                      <Menu.Item key={sub.key}>
                        {({ active }) => (
                          <a
                            href={sub.href}
                            className={classNames(
                              active ? 'text-gray-200' : 'text-gray-400',
                              'block px-4 py-2 text-xl'
                            )}
                          >
                            <button type='button'>{sub.label}</button>
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              )}
            </Menu>
            {/* {link.label} */}
            {/* <motion.div className='w-20'>{link.label}</motion.div> */}
          </div>
        ))}
      </ul>

      <div className='lg:flexCenter hidden'>
        {!auth && (
          <Link href='/sign-in'>
            <Button
              title='SIGN IN'
              icon='rocket'
              type='button'
              variant='btn_regular'
              w={18}
              h={18}
            />
          </Link>
        )}
        <motion.div className='ml-auto'>
          <UserButton afterSignOutUrl='/' showName />
        </motion.div>
      </div>

      {/* TODO: dropdown mobile menu for navbar items */}
      {/* mobile menu */}

      <div
        onClick={toggleMobileMenu}
        className='cursor-pointer lg:hidden z-51  transition-transform'
        style={{ position: 'relative', zIndex: 51 }}
      >
        {!isMobileMenu && (
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
          <motion.ul className='lg:hidden ml-5'>
            {NAV.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className='light-14 hover:regular-18 text-gray-500  hover:text-gray-100 flex-start cursor-pointer pb-1 transition-all ease-in-out'
                onClick={async () => {
                  await delay(400)
                  closeMobileMenu()
                }}
              >
                <div className='h-12'>
                  <button type='button'>{link.label}</button>
                </div>
              </Link>
            ))}
            <hr className='bg-gray-700' />
            {!auth ? (
              <motion.li className='flex flex-end justify-between'>
                <Image
                  src='/assets/svg/up.svg'
                  alt='menu-mobile'
                  width={18}
                  height={18}
                  className='cursor-pointer'
                  onClick={toggleMobileMenu}
                />
                <Link
                  href='/sign-in'
                  className='cursor-pointer'
                  onClick={async () => {
                    await delay(400)
                    closeMobileMenu()
                  }}
                >
                  <Button
                    title='SIGN IN'
                    icon='rocket'
                    type='button'
                    variant='btn_mini cursor-pointer'
                    w={18}
                    h={18}
                  />
                </Link>
              </motion.li>
            ) : (
              <motion.div className='flex flex-row justify-between space-x-3 gap-2 my-5 mr-5 '>
                <Image
                  src='/assets/svg/up.svg'
                  alt='menu-mobile'
                  width={18}
                  height={18}
                  className='cursor-pointer'
                  onClick={toggleMobileMenu}
                />
                <motion.div>
                  <span>
                    <li>
                      <motion.div
                        className='ml-auto flex justify-end'
                        ref={userProfileRef}
                        onClick={() => {
                          setIsUserBtn(true)
                        }}
                      >
                        <UserButton afterSignOutUrl='/' showName />
                      </motion.div>
                    </li>
                  </span>
                </motion.div>
              </motion.div>
            )}
          </motion.ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
