import React from 'react'

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
      Frame 1
    </div>
  )
}

export default Frame
