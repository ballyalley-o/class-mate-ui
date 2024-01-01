'use client'

import { useState } from 'react'
import { StudentTableRow } from '@components/Table'
import { StudentTableProps } from '@interfaces/Student'
// @constants
import { studentHeader } from '@constants'

const StudentTable = ({ students }: StudentTableProps) => {
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

  return (
    <table
      className='min-w-full divide-y divide-gray-800 border-collapse'
      onMouseLeave={handleMouseLeave}
    >
      <thead>
        <tr>
          {studentHeader.map((header) => (
            <th
              key={header}
              className='px-4 bg-black font-bold text-gray-100 uppercase '
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <StudentTableRow
            student={student}
            key={student?._id}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            isHovered={index === hoveredRow}
            isFocused={index === focusedRow}
            onFocus={() => handleRowFocus(index)}
          />
        ))}
      </tbody>
    </table>
  )
}

export default StudentTable
