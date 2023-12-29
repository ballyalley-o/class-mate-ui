import { useState, MouseEvent } from 'react'
import { CheckCircleIcon } from '@heroicons/react/20/solid'
import { XCircleIcon } from '@heroicons/react/20/solid'

const StudentTableRow = ({
  student,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}: any) => {
  const [hoverCoords, setHoverCoords] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: MouseEvent<HTMLTableRowElement>) => {
    const boundingRect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - boundingRect.left
    const y = e.clientY - boundingRect.top
    setHoverCoords({ x, y })
  }

  const handleMouseLeave = () => {
    setHoverCoords({ x: 0, y: 0 })
    onMouseLeave
    !isHovered
  }

  const gradientStyle =
    isHovered && hoverCoords.x !== 0 && hoverCoords.y !== 0
      ? {
          background: `radial-gradient(circle at ${hoverCoords.x}px ${hoverCoords.y}px, rgba(255, 255, 255, 0.2) 0%, transparent 50%)`,
        }
      : {}

  const blurStyle = isHovered ? { filter: 'blur(5px)' } : {}

  return (
    <tr
      key={student?._id}
      className={`bg-black/60 text-white transition-all  backdrop-filter backdrop-blur-md  relative overflow-hidden ${
        isHovered ? 'hovered' : 'focusBlur'
      }`}
      onMouseMove={handleMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={gradientStyle}
    >
      <td>
        <div className='inline-block'>
          {student?.isActive ? (
            <CheckCircleIcon
              width={15}
              height={15}
              className='text-green-500 inline-block'
            />
          ) : (
            <XCircleIcon
              width={15}
              height={15}
              className='text-red-500 inline-block'
            />
          )}
        </div>
      </td>
      <td>{student?._id}</td>
      <td>{student?.firstname}</td>
      <td>{student?.lastname}</td>
      <td>{student?.email}</td>
      <td>{student?.username}</td>
      <td>{student?.location}</td>
      <td>{student?.cohort?.name}</td>
    </tr>
  )
}

export default StudentTableRow
