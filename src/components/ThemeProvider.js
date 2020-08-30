import React, { useState, createContext, useMemo } from 'react'

export const GlobalThemeContext = createContext()

const GlobalThemeContextProvider = (props) => {
  const [GlobalTheme, setGlobalTheme] = useState('dark')

  const value = useMemo(() => ({
    GlobalTheme,
    setGlobalTheme
  }), [GlobalTheme])

  return (
    <GlobalThemeContext.Provider value={value}>
        {props.children}
    </GlobalThemeContext.Provider>
  )
}

export default GlobalThemeContextProvider