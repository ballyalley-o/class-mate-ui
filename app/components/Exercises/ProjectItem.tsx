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
      <div className={`rounded-full p-2 lg:p-4 bg-${variant}`}>
        <Image
          src={`/assets/svg/${icon}.svg`}
          alt={icon}
          width={28}
          height={28}
        />
      </div>
    </li>
  )
}

export default ProjectItem
