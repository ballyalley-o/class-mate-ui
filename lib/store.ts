// import studentReducer from '@redux/slices/student-slice'
import { configureStore } from '@reduxjs/toolkit'
import { Action, ThunkAction } from '@reduxjs/toolkit'
// import { studentReducer, student } from '@redux/slices'
import { apiSlice } from './features/api-slice'

export const store = () =>
  configureStore({
    reducer: {
      [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: process.env.NODE_ENV !== 'production',
  })

export type AppStore = ReturnType<typeof store>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
