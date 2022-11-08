import React, { useState } from 'react'
import MyContext from './Context'
export const Provider = ({ children }) => {
    const [ sidebar , setSidebar ] = useState(false);

  return (
    <MyContext.Provider value={
        {
            sidebar,
            setSidebar
        }
    }>

        { children }
    </MyContext.Provider>
  )
}
