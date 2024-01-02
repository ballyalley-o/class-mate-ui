'use client'

import React from 'react'
import { StudentTable, TableSkeleton } from '@components'
// @redux
import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react'
// @slices
import { useGetStudentsQuery } from '@lib/features/student-slice'
// @interfaces
import { Student } from '@interfaces/Student'

interface StudentData {
  students: Student[]
}

const Students = () => {
  const { data, isLoading, error } = useGetStudentsQuery({})

  const studentsLength = data?.students?.length

  return (
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
  )
}

export default Students
