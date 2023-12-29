import { API } from '@app-routes'
import { apiSlice } from '@lib/features/api-slice'

interface StudentsApiEndpoints {
  getStudents: () => { url: string }
  [key: string]: () => any
}

export const studentsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getStudents: builder.query({
      query: () => ({
        url: API.students,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
})

export const { useGetStudentsQuery } = studentsApiSlice
