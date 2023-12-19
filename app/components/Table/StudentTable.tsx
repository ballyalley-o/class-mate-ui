interface Student {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  username: string;
  location: string;
  cohort: {
    name: string;
  };
  isActive: boolean;
}

interface StudentTableProps {
  students: Student[]
}

const StudentTable = ({ students }: StudentTableProps) => {
  const headers = [
    'ID',
    'First Name',
    'Last Name',
    'Email',
    'Username',
    'Location',
    'Cohort',
    'Active',
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
          <tr
            key={student?._id}
            className={
              student.isActive
                ? 'bg-green-200 text-black'
                : 'bg-black text-white'
            }
          >
            <td className='px-4 border-b'>{student._id}</td>
            <td className='px-4 border-b'>{student.firstname}</td>
            <td className='px-4 border-b'>{student.lastname}</td>
            <td className='px-4 border-b'>{student.email}</td>
            <td className='px-4 border-b'>{student.username}</td>
            <td className='px-4 border-b'>{student.location}</td>
            <td className='px-4 border-b'>{student.cohort.name}</td>
            <td className='px-4 border-b'>
              {student.isActive ? 'Active' : 'Inactive'}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default StudentTable
