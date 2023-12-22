export interface Student {
  _id: string
  firstname: string
  lastname: string
  email: string
  username: string
  location: string
  cohort: {
    name: string
  }
  isActive: boolean
}

export interface StudentTableProps {
  students: Student[]
}
