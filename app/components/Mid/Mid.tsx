import React from 'react'
import { Frame } from '@components/Mid'

const Mid = () => {
  return (
    <section className=' 2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20'>
      <div className='hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]'>
        <Frame
          bgImage='bg-bg-img-2'
          title='Something'
          subtitle='This is Sample'
          data=''
        />
        <Frame
          bgImage='bg-bg-img'
          title='Something'
          subtitle='This is Sample'
          data=''
        />
      </div>
    </section>
  )
}

export default Mid
