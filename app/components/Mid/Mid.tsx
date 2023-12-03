import React from 'react'
import { Frame } from '@components/Mid'
import Image from 'next/image'

const Mid = () => {
  return (
    <section className=' 2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20'>
      <div className='hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]'>
        <Frame
          bgImage='bg-bg-img-2'
          title='10-10 Cohort'
          subtitle='Software Engineerin'
          data='18+ Students'
        />
        <Frame
          bgImage='bg-bg-img'
          title='02-13 Cohort'
          subtitle='Software Engineering'
          data='9 Students'
        />
      </div>

      <div className='flexEnd mt-10 px-6 lg:mt-60 lg:mr-6'>
        <div className='bg-gray-900 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-lg xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-lg'>
          <h2 className='regular-24 md:regular-32 2xl:regular-64 capitalize text-white'>
            <strong>You Missed the Class?</strong> Check the class recording
            here!
          </h2>
          <p className='regular-14 xl:regular-16 mt-5 text-white'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut neque
            cumque rem similique atque ad laudantium reiciendis. Repellendus,
            ducimus tempora incidunt ea eos distinctio voluptas natus quisquam.
            Dolore, velit nobis.
          </p>
          <Image
            src='/assets/svg/quote.svg'
            alt='quote'
            width={186}
            height={219}
            className='float-quote'
          />
        </div>
      </div>
    </section>
  )
}

export default Mid
