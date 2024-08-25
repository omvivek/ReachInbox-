import React from 'react'

const themecontext = React.createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
})

export default themecontext
