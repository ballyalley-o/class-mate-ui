import React from 'react'
import Image from 'next/image'

const AboutPage = () => {
  return (
    <section className='flexCenter flex-col'>
      <div className='padding-container max-container w-full pb-24'>
        <Image
          src='/assets/brand/classmate-ico.svg'
          alt='camp'
          width={50}
          height={50}
        />

        <div className='flex flex-wrap justify-between p-10 gap-5 lg:gap-10'>
          <h2 className='bold-40 lg:bold-64 xl:max-w-[390px]'>
            Your Ultimate Assistant to your Path
          </h2>
          <p className='regular-16 text-gray-30 m-auto xl:max-w-[520px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
            error perferendis aliquam iste animi, ullam harum repellat facilis
            quasi officiis recusandae voluptatibus assumenda eum praesentium
            hic, consequatur nostrum sequi culpa.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutPage
