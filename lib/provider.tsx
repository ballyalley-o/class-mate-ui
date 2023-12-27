'use client'

import { useRef } from 'react'
import { store, AppStore } from '@lib/store'
import { Provider } from 'react-redux'

export function Providers({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = store()
  }
  return <Provider store={storeRef.current}>{children}</Provider>
}
