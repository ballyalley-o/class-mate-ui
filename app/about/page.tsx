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
          src='/assets/bg/bg-img-14.jpg'
          alt='wires'
          width={1440}
          height={580}
          className='w-full object-cover object-center xl:rounded-5xl lg:w-auto rounded-xl'
        />

        <div className='absolute flex-bg-white py-8 pl-5 pr-7 rounded-3xl shadow-md bottom-50 md:left-[55%] border'>
          <div className='flexBetween flex-col'>
            <div className='flex w-full flex-col'>
              <div className='flexCenter w-full'>
                <Image
                  src='/assets/svg/pipeline.svg'
                  alt='pipeline'
                  width={16}
                  height={158}
                  className='w-auto h-48'
                />
                <div className='flex-row '>
                  <p className='regular-16 text-gray-20 pb-2'>Dream Job</p>
                  <p className='bold-16 text-green-50 pb-2'>
                    Software Engineering
                  </p>
                  <p className='regular-16 text-gray-20'>Start track</p>
                  <h4 className='bold-20 mt-2 whitespace-nowrap'>Dummy</h4>
                </div>
              </div>
            </div>

            <div className='flex w-full flex-col'></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPage
