import React from 'react'
import { MdNotifications, MdMessage } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const Navigation = () => {

return (
    <div className=" border shadow w-full h-20 rounded-full flex items-center justify-between px-5">
        <img src="https://flow.eloope.com/wp-content/uploads/2022/09/MC-LOGO-1080PX-black.png" alt="" className=" w-12" />

        <div className="">
            <ul className="flex items-center">
                <li className="">
                    <a href="" className=" block p-3 rounded-full hover:bg-gray-100 text-2xl text-gray-600">
                        <MdNotifications/>
                    </a>
                </li>
                <li className="">
                    <a href="" className=" block p-3 rounded-full hover:bg-gray-100 text-2xl text-gray-600">
                        <MdMessage/>
                    </a>
                </li>
                <li className=" ml-10 ">
                    <a href="" className=" flex p-3 items-center hover:bg-gray-50 rounded-full ">
                        <span className=" mr-5 text-lg font-semibold">John Doe</span>
                        <span className="rounded-full bg-gray-200 p-3 text-gray-400">
                            <FaUser/>
                        </span>
                    </a>
                </li>
            </ul>

        </div>
        
    </div>
  )
}

export default Navigation