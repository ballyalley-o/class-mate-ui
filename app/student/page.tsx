'use client'

import React from 'react'
import { StudentTable } from '@components'
// @components
import { SearchInput } from '@components'
// @slices
import { useGetStudentsQuery } from '@lib/features/student-slice'
// @constants
import { LABEL } from '@constants'

const Students = () => {
  const { data, isLoading, error } = useGetStudentsQuery({})

  const studentsLength = data?.students?.length

  return (
    <>
      <span className='flex flex-start mt-10'>
        <h1 className='text-4xl m-auto my-9 font-thin'>{LABEL.studentsList}</h1>
      </span>
      <SearchInput />
      <section className='flex-col flexCenter overflow-hidden bg-projects bg-center bg-no-repeat py-24'>
        <div className='max-container padding-container relative w-full flex justify-end'>
          <div className=' flex-1 lg:min-h-[900px]'>
            <StudentTable
              students={data?.students}
              isLoading={isLoading}
              error={error}
              studentsLength={studentsLength}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Students
