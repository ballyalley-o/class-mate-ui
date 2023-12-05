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
            Your Ultimate Assistant to your Learning
          </h2>
          <p className='regular-16 text-gray-30 m-auto xl:max-w-[520px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
            error perferendis aliquam iste animi, ullam harum repellat facilis
            quasi officiis recusandae voluptatibus assumenda eum praesentium
            hic, consequatur nostrum sequi culpa.
          </p>
        </div>
      </div>

      <div className='flexCenter max-container w-full'>
        <Image
          src='/assets/bg/bg-img-18.jpg'
          alt='wires'
          width={1440}
          height={580}
          className='w-full object-cover object-center 2xl:rounded-5xl'
        />

        <div className='absolute flex-bg-white py-8 pl-5 pr-7 rounded-3xl border shadow-md md:lef-[5%] lg:top-20'>
          <div className='flexBetween flex-col'>
            <div className='flex w-full flex-col'>
              <div className='flexBetween w-full'>
                <p className='regular-16 text-gray-20'>Dream Job</p>
                <p className='bold-16 text-green-50'>Software Engineering</p>
              </div>
              <p className='bold-20 mt-2 whitespace-nowrap'>Somewhere</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPage
