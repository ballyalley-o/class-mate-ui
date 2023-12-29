import { StudentTableProps } from '@interfaces/Student'
import { CheckCircleIcon } from '@heroicons/react/20/solid'
import { XCircleIcon } from '@heroicons/react/20/solid'

const StudentTable = ({ students }: StudentTableProps) => {
  const headers = [
    'Status',
    'ID',
    'First Name',
    'Last Name',
    'Email',
    'Username',
    'Location',
    'Cohort',
  ]

  return (
    <table className='min-w-full divide-y divide-gray-800 border-collapse'>
      <thead>
        <tr>
          {headers.map((header) => (
            <th
              key={header}
              className='py-2 px-4 bg-black font-bold text-gray-100 uppercase border-b'
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student?._id} className={'bg-black text-white'}>
            <td className='px-6  border-b justify-center text-center'>
              {student?.isActive ? (
                <CheckCircleIcon
                  width={15}
                  height={15}
                  className='text-green-500 my-auto'
                />
              ) : (
                <XCircleIcon width={15} height={15} className='text-red-500' />
              )}
            </td>
            <td className='px-6 text-center border-b'>{student?._id}</td>
            <td className='px-4 text-center border-b'>{student?.firstname}</td>
            <td className='px-4 text-center border-b'>{student?.lastname}</td>
            <td className='px-4 text-center border-b'>{student?.email}</td>
            <td className='px-4 text-center border-b'>{student?.username}</td>
            <td className='px-4 text-center border-b'>{student?.location}</td>
            <td className='px-4 text-center border-b'>
              {student?.cohort?.name}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default StudentTable
