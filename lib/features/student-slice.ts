import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query/react'
import { API } from '@constants/routes'
import { apiSlice } from '@lib/features/api-slice'

interface StudentsApiEndpoints {
  getStudents: (arg?: FetchArgs) => { url: string }
  [key: string]: (arg?: any) => any
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
