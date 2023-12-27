import { API } from '@constants/routes'
import { apiSlice } from './api-slice'

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
