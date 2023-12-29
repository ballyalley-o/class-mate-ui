'use client'

import { useState } from 'react'
import { StudentTableRow } from '@components/Table'
import { StudentTableProps } from '@interfaces/Student'
// @constants
import { studentHeader } from '@constants'

const StudentTable = ({ students }: StudentTableProps) => {
  const [hoveredRows, setHoveredRows] = useState(
    new Array(students.length).fill(false)
  )

  const handleMouseEnter = (index: number) => {
    const newHoveredRows = [...hoveredRows]
    newHoveredRows[index] = true
    setHoveredRows(newHoveredRows)
  }

  const handleMouseLeave = (index: number) => {
    const newHoveredRows = [...hoveredRows]
    newHoveredRows[index] = false
    setHoveredRows(newHoveredRows)
  }
  return (
    <table className='min-w-full divide-y divide-gray-800 border-collapse'>
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
            onMouseLeave={() => handleMouseLeave(index)}
            isHovered={hoveredRows[index]}
          />
        ))}
      </tbody>
    </table>
  )
}

export default StudentTable
