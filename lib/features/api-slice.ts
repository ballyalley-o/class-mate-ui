import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// @constants
import { GLOBAL } from '@config'
import { API } from '@constants/routes'

const baseQuery = fetchBaseQuery({ baseUrl: GLOBAL.api })

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['Student', 'Trainer', 'Cohort'],
  endpoints: (builder) => ({}),
})
