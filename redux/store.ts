// import studentReducer from '@redux/slices/student-slice'
import { configureStore } from '@reduxjs/toolkit'
import { studentReducer, student } from '@redux/slices'

export const store = configureStore({
  reducer: {
    studentReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
