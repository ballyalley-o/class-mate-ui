'use client'

import { useState } from 'react'
// @redux
import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react'
import { TableSkeleton } from '@components'
import { StudentTableRow } from '@components/Table'
import { StudentTableProps } from '@interfaces/Student'
// @constants
import { studentHeader, RESPONSE } from '@constants'

const StudentTable = ({
  students,
  studentsLength,
  isLoading,
  error,
}: StudentTableProps) => {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null)
  const [focusedRow, setFocusedRow] = useState(-1)

  const handleMouseEnter = (index: number) => {
    setHoveredRow(index)
  }

  const handleMouseLeave = () => {
    setHoveredRow(null)
  }

  const handleRowFocus = (index: number) => {
    setFocusedRow(index)
  }

  const isFetchBaseQueryError = (error: any): error is FetchBaseQueryError => {
    return 'data' in error
  }

  return (
    <div>
      <table
        className='min-w-full divide-y divide-gray-800 border-collapse'
        onMouseLeave={handleMouseLeave}
      >
        <thead>
          <tr>
            {studentHeader.map((header) => (
              <th
                key={header}
                className='px-4 bg-black font-bold text-gray-200 uppercase'
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {isLoading && (
            <tr>
              {/* FIXME: use num of students instead of the header from the num of rows  */}
              <td colSpan={studentHeader.length} className='text-center m-auto'>
                <TableSkeleton numRows={studentHeader.length || 0} />
              </td>
            </tr>
          )}
          {error && (
            <tr>
              <td
                colSpan={studentHeader.length}
                className='my-4 text-center m-auto'
              >
                <h1 className='text-2xl'>
                  {/* TODO: Error fallbacks */}
                  {isFetchBaseQueryError(error)
                    ? RESPONSE.error.fetching
                    : RESPONSE.error.internalServer || String(error.message)}
                </h1>
              </td>
            </tr>
          )}
          {!isLoading &&
            !error &&
            students.map((student, index) => (
              <StudentTableRow
                student={student}
                key={student?._id}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                isHovered={index === hoveredRow}
                isFocused={index === focusedRow}
                onFocus={() => handleRowFocus(index)}
                isLoading={isLoading}
              />
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default StudentTable
