'use client'

import React from 'react'
import { StudentTable } from '@components'
import { mockStudents } from '@constants/mock'
// @slices
import { useGetStudentsQuery } from '@lib/features/student-slice'

const Students = () => {
  const { data, isLoading, error } = useGetStudentsQuery()

  if (error) {
    // Check if it's a FetchBaseQueryError
    if ('error' in error) {
      // Handle FetchBaseQueryError
      console.error('Error:', error.error)
    } else {
      // Handle SerializedError
      console.error('Error:', error)
    }

    // Render your error component or message
    return <div>Error occurred</div>
  }

  return (
    <section className='flex-col flexCenter overflow-hidden bg-projects bg-center bg-no-repeat py-24'>
      {isLoading ? (
        <h1> Loading... </h1>
      ) : (
        <div className='max-container padding-container relative w-full flex justify-end'>
          <div className='flex flex-1 lg:min-h-[900px]'>
            <StudentTable students={data.students} />
          </div>
        </div>
      )}
    </section>
  )
}

export default Students
