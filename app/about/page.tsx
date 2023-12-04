import React from 'react'
import Image from 'next/image'

const AboutPage = () => {
  return (
    <section className='flexCenter flex-col'>
      <div className='border-2 border-red-500 padding-container max-container w-full pb-24'>
        <Image
          src='/assets/brand/classmate-ico.svg'
          alt='camp'
          width={50}
          height={50}
        />
      </div>
    </section>
  )
}

export default AboutPage
