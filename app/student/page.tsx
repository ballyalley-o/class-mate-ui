'use client'

import React from 'react'
import Image from 'next/image'
import { StudentTable, TableSkeleton } from '@components'
// @redux
import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react'
// @slices
import { useGetStudentsQuery } from '@lib/features/student-slice'
// @assets
import { ICON } from '@assets/icons'
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
      <div className='flex flex-end justify-end container'>
        <div className=' md:flex-column  space-y-4 md:space-y-0 py-4'>
          <label className='sr-only'>{LABEL.search}</label>
          <div className='relative'>
            <div className='absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none'>
              <svg
                className='w-4 h-4 text-gray-500 dark:text-gray-400'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 20 20'
              >
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                />
              </svg>
            </div>
            <input
              type='text'
              id='table-search-users'
              className='block pt-2 ps-10 text-sm text-gray-900/60  w-80 bg-gray-50 dark:bg-gray-900/60 dark:placeholder-gray-400 dark:text-white'
              placeholder='Search for Students'
            />
          </div>
        </div>
      </div>
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
