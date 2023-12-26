// import studentReducer from '@redux/slices/student-slice'
import { configureStore } from '@reduxjs/toolkit'
import { Action, ThunkAction } from '@reduxjs/toolkit'
// import { studentReducer, student } from '@redux/slices'
import { apiSlice } from '@redux/slices/api-slice'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>
