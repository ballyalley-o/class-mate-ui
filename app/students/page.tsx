'use client'

import React from 'react'
import { StudentTable } from '@components'
import { mockStudents } from '@constants/mock'
// @slices
import { useGetStudentsQuery } from '@lib/features/student-slice'

const Students = () => {
  const { data: students, isLoading, error } = useGetStudentsQuery()

  return (
    <section className='flex-col flexCenter overflow-hidden bg-projects bg-center bg-no-repeat py-24'>
      {isLoading ? (
        <h1> Loading... </h1>
      ) : error ? (
        <div>{error?.data?.message || error?.error} </div>
      ) : (
        <div className='max-container padding-container relative w-full flex justify-end'>
          <div className='flex flex-1 lg:min-h-[900px]'>
            <StudentTable students={students?.students} />
          </div>
        </div>
      )}
    </section>
  )
}

export default Students
