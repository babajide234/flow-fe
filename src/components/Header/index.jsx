import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className=" border-b-2">
        <div className="flex items-center w-11/12 mx-auto py-7 justify-between">
            <Link to={`/`}>
                <img src="https://flow.eloope.com/wp-content/uploads/2022/11/churchlogo-icon-1536x1536.png" alt="" className=" w-14" />
            </Link>
            <ul className="flex ">
                <li className="">
                    <Link to={`/login`} className={ ` p-3 hover:bg-gray-100 rounded-lg mr-3` }>Login</Link>
                </li>
                <li className="">
                    <Link to={`/register`} className={ ` p-3 border border-white overflow-hidden  bg-blue-700 text-white hover:bg-white hover:border hover:border-blue-700 hover:text-blue-700 transition-all rounded-lg` }>Register</Link>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Navbar