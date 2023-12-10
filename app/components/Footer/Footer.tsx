import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { GLOBAL } from '@config'
import { FOOTER, SOCIALS, CONTACT_US } from '@constants'
import { FooterColumn } from '@components'

const Footer = () => {
  return (
    <footer className='flexCenter mb-24 mt-24'>
      <div className='padding-container max-container flex w-full flex-col gap-14'>
        <div className='flex flex-col items-start justify-center gap-[10%] md:flex-row'>
          <Link href='/' className='mr-20'>
            <Image
              src={GLOBAL.brand.logo_secondary}
              alt='brand'
              width={120}
              height={50}
            />
          </Link>
          <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
            {FOOTER.map((column, index) => (
              <FooterColumn key={index} title={column.title}>
                <ul className='regular-14 flex flex-col gap-4 text-gray-30'>
                  {column.links.map((link, index) => (
                    <Link href='/' key={index}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}
            <div className='flex flex-col gap-5'>
              <FooterColumn title={CONTACT_US.title}>
                {CONTACT_US.links.map((link, index) => (
                  <Link
                    href='/'
                    key={index}
                    className='flex gap-4 md:flex-col lg:flex-row'
                  >
                    <p className='whitespace-nowrap'>{link.label}:</p>
                    <p className='medium-14 whitespace-nowrap text-blue-70'>
                      {link.value}
                    </p>
                  </Link>
                ))}
              </FooterColumn>
            </div>
            <div className='flex flex-col gap-5'>
              <FooterColumn title={SOCIALS.title}>
                <ul className='regular-14 flex gap-4 text-gray-30'>
                  {SOCIALS.links.map((link, index) => (
                    <Link href='/' key={index}>
                      <Image
                        src={`/assets/svg/socials/${link}.svg`}
                        alt='brand-logos'
                        width={24}
                        height={24}
                      />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className='border border-gray-600' />
        <p className='regular-14 w-full text-center text-gray-600'>
          &copy; 2023 ClassMate | All rights reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer
