import React, { useState } from 'react'

type AppStateValue = {
  username: string
  shoppingCart: { items: { id: number; name: string }[] }
}

const defaultContextValue: AppStateValue = {
  username: 'Kuroi_Cc',
  shoppingCart: { items: [] }
}

export const appContext = React.createContext(defaultContextValue)
export const appSetStateContext = React.createContext<
  React.Dispatch<React.SetStateAction<AppStateValue>>
  // eslint-disable-next-line @typescript-eslint/no-empty-function
>(() => {})

export const AppStateProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(defaultContextValue)

  return (
    <appContext.Provider value={state}>
      <appSetStateContext.Provider value={setState}>{children}</appSetStateContext.Provider>
    </appContext.Provider>
  )
}
