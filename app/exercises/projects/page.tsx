import Image from 'next/image'
import React from 'react'
import { PROJECTS } from '@constants'
import { ProjectItem } from '@components'

const Projects = () => {
  return (
    <section className='flex-col flexCenter overflow-hidden bg-projects bg-center bg-no-repeat py-24'>
      <div className='max-container padding-container relative w-full justify-end'>
        <div className='flex flex-1 lg:min-h-[900px]'>
          <Image
            src='/assets/images/rocket.png'
            alt='phone'
            width={700}
            height={1000}
            className='projects-float'
          />
        </div>
        <div className='z-20 flex-w-full flex-col lg:w-[60%]'>
          <div className='relative'>
            <Image
              src='/assets/svg/projects.svg'
              alt='class-mate'
              width={50}
              height={100}
              className='absolute lg:left-[210px] top-[10px] w-10 xs:left-[130px] lg:w-[50px]'
            />
            <h2 className='bold-40 lg:bold-64'>Projects</h2>
          </div>
          <ul>
            {PROJECTS.map((project) => (
              <ProjectItem
                key={project.topic}
                project_name={project.project_name}
                topic={project.topic}
                icon={project.icon}
                variant={project.variant}
                description={project.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Projects
