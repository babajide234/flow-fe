import React, { useContext } from 'react'
import MyContext from '../../Context'
const Page = ({ children }) => {
    const { sidebar , setSidebar } = useContext(MyContext)

  return (
    <>
        <div className={`flex transition-all ease-in-out ${ sidebar ? 'ml-16':'ml-64'} shadow-md h-screen py-10 px-10`} id="">
            {children}
        </div>
    </>
  )
}

export default Page