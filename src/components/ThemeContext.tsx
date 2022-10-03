import React, { createContext, useContext, useEffect, useState } from 'react'
import { darkTheme } from '../../stitches.config'
import { Button } from '../primitives/Button'
import { SunIcon } from '@radix-ui/react-icons'

// ThemeContext
export const ThemeContext = createContext<{
  theme: string
  setTheme: (c: string) => void
}>({
  theme: 'theme-default',
  setTheme: () => {},
})

// ThemeProvider
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState('theme-default')

  useEffect(() => {
    document.body.classList.remove('theme-default', darkTheme)
    document.body.classList.add(theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// ThemeToggle
export const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  const isDarkTheme = theme === darkTheme

  return (
    <Button
      css={{ position: 'fixed', zIndex: '$5', right: '$3', top: '$3' }}
      onClick={() => setTheme(isDarkTheme ? 'theme-default' : darkTheme)}
    >
      <SunIcon />
    </Button>
  )
}
