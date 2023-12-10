import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GLOBAL } from '@config'
import { Button } from '@components'
import { BRAND } from '@constants'

const Hero = () => {
  return (
    <section className='max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row'>
      <div className='hero-card' />

      <div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>
        <h1 className='pt-5 bold-52 lg:bold-88'>{BRAND.hero_title}</h1>
        <p className='regular-16 mt-6 text-gray-20 xl:max-w-[520px]'>
          {BRAND.description}
        </p>

        <div className='my-11 flex flex-wrap gap-5'>
          <div className='flex items-center gap-2'>&nbsp;</div>

          <p className='bold-16 lg:bold-20 text-blue-70'>&nbsp;</p>
        </div>

        <div className='flex flex-col w-64 regular-12 gap-3 flex-row'>
          <Button
            type='button'
            title='REQUEST FOR AN INVITE'
            variant='btn_green'
            icon='send'
            w={24}
            h={24}
            iconClassName='-rotate-45'
          />
          <p className='italic regular-14'>
            got your account?
            <Link href='/sign-in'>
              &nbsp; <b> Sign-In </b> &nbsp;
            </Link>
            here ☡
          </p>
        </div>
      </div>

      <div className='relative flex flex-1 items-start'>
        <div className='relative z-20 flex w-[268px] flex-col gap-8 rounded-lg bg-gray-800 px-7 py-8'>
          <div className='flex flex-col'>
            <div className='flexBetween'>
              <p className='regular-16 block text-gray-20'>Students</p>
              <Image
                src='/assets/svg/book.svg'
                alt='book'
                width={24}
                height={24}
              />
            </div>
            <p className='bold-20 text-white'>45</p>
          </div>

          <div className='flexBetween'>
            <div className='flex flex-col'>
              <p className='regular-16 block text-gray-20'>Module-3</p>
              <p className='bold-12 text-white'>p.78-90</p>
            </div>
            <div className='flex flex-col'>
              <p className='regular-16 block text-gray-20'>Module-2</p>
              <p className='bold-20 text-white'>7%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
