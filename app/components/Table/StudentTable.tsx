import { StudentTableProps } from '@interfaces/Student'
// @constants
import { studentHeader } from '@constants'
import { CheckCircleIcon } from '@heroicons/react/20/solid'
import { XCircleIcon } from '@heroicons/react/20/solid'

const StudentTable = ({ students }: StudentTableProps) => {
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
        {students.map((student) => (
          <tr key={student?._id} className={'bg-black text-white border-b'}>
            <td className=''>
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
        ))}
      </tbody>
    </table>
  )
}

export default StudentTable
