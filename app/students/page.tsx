import React from 'react'
import { StudentTable } from '@components'
import { mockStudents } from '@constants/mock'

const Students = () => {
  const studentArray = [{}]

  return (
    <section className='flex-col flexCenter overflow-hidden bg-projects bg-center bg-no-repeat py-24'>
      <div className='max-container padding-container relative w-full flex justify-end'>
        <div className='flex flex-1 lg:min-h-[900px]'>
          <StudentTable students={mockStudents} />
        </div>
      </div>
    </section>
  )
}

export default Students
