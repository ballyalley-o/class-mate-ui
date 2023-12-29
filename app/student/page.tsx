'use client'

import React from 'react'
import { StudentTable } from '@components'
// @redux
import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react'

// @slices
import { useGetStudentsQuery } from '@lib/features/student-slice'

const Students = () => {
  const { data, isLoading, error } = useGetStudentsQuery({})

  const isFetchBaseQueryError = (error: any): error is FetchBaseQueryError => {
    return 'data' in error
  }

  return (
    <section className='flex-col flexCenter overflow-hidden bg-projects bg-center bg-no-repeat py-24'>
      <div className='max-container padding-container relative w-full flex justify-end'>
        <div className=' flex-1 lg:min-h-[900px]'>
          {isLoading ? (
            <div className='text-center m-auto'>
              <h1>Loading...</h1>
            </div>
          ) : error ? (
            <div className='text-center m-auto'>
              <h1 className='text-2xl'>
                {isFetchBaseQueryError(error)
                  ? 'An error occured in fetching the data'
                  : String(error)}
              </h1>
            </div>
          ) : (
            <StudentTable students={data.students} />
          )}
        </div>
      </div>
    </section>
  )
}

export default Students
