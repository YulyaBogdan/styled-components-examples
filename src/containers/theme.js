import React from 'react'
import { ThemeProvider } from 'styled-components'

const Theme = {
  night: "#FFFFEE",
  day: "#000022"
}

export default ({children}) => <ThemeProvider theme={Theme}>{children}</ThemeProvider>