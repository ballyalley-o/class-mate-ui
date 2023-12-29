import { FetchArgs } from '@reduxjs/toolkit/query/react'
import { API } from '@app-routes'
import { apiSlice } from '@lib/features/api-slice'

interface StudentsApiEndpoints {
  getStudents: () => { url: string }
  [key: string]: () => any
}

// const apiUrl = 'http://localhost:3004/api/v0.1'

export const studentsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getStudents: builder.query({
      query: () => ({
        // url: apiUrl + '/student',
        // FIXME: constants outside of module  doesn't work
        url: API.students,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
})

export const { useGetStudentsQuery } = studentsApiSlice
