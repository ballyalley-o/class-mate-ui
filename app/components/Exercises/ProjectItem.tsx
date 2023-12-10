import React from 'react'
import Image from 'next/image'

type ProjectItem = {
  project_name: string
  topic: string
  icon: string
  variant: string
  description: string
}

const ProjectItem = ({
  project_name,
  topic,
  icon,
  variant,
  description,
}: ProjectItem) => {
  return (
    <li className='flex w-full flex-1 flex-col items-start'>
      <div className='flex items-center'>
        <div className={`rounded-xl p-2 lg:p-3 ${variant} mr-5`}>
          <Image
            src={`/assets/svg/${icon}.svg`}
            alt={icon}
            width={28}
            height={28}
          />
        </div>
        <span className='mr-4'>
          <p className='regular-14'>{project_name}</p>
        </span>
      </div>

      <h2 className='bold-20 lg:bold-32 mt-5 capitalize'>{topic}</h2>
      <p className='regular-16 mt- text-gray-30 lg:mt-[30px] lg:bg-none'>
        {description}
      </p>
    </li>
  )
}

export default ProjectItem
