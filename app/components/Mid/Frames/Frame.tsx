import React from 'react'
import Image from 'next/image'
import { AVATAR } from '@constants/mock'

interface Frame {
  bgImage: string
  title: string
  subtitle: string
  data: string
}

const Frame = ({ bgImage, title, subtitle, data }: Frame) => {
  return (
    <div
      className={`h-full w-full min-w-[1100px] ${bgImage} bg-cover bg-no-repeat lg:rounded-r-lg 2xl:rounded-xl`}
    >
      <div className='flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10'>
        <div className='flexCenter gap-4'>
          <div className='rounded-full bg-white p-4'>
            <Image src='/folded-map.svg' alt='books' width={28} height={28} />
          </div>
          <div className='flex flex-col gap-4'>
            <h4 className='bold-18 text-white'>{title}</h4>
            <p className='regular-14 text-white'>{subtitle}</p>
          </div>
        </div>
        <div className='flexCenter gap-6'>
          <span className='flex -space-x-4 overflow-hidden'>
            {AVATAR.map((url: string) => (
              <Image
                className='inline-block h-10 w-10 rounded-full'
                src={url}
                key={url}
                alt='avatar'
                width={52}
                height={52}
              />
            ))}
          </span>
          <p className='bold-16 md:bold-20 text-white'>{data}</p>
        </div>
      </div>
    </div>
  )
}

export default Frame
