import React, { useState, useContext } from 'react'
import { BsLayoutSidebarInsetReverse, BsChevronDown } from 'react-icons/bs';
import { MdDashboard } from "react-icons/md";
import { FaBirthdayCake } from "react-icons/fa";
import MyContext from '../../Context';

const Sidebar = () => {
    const { sidebar , setSidebar } = useContext(MyContext)

    const style ={
        boxShadow: '0 3px 13px 0 rgb(18 43 70 / 10%)',
        zIndex: '611',
        transition: 'width .2s'
        // boxShadow: '-5px 0 5px -5px #333',
    }
    const handleCloseSidebar = (e) => {
        e.preventDefault();
        setSidebar(!sidebar);
    }
  return (
    <aside className={`fixed top-0 left-0 h-full px-2.5 transition-all ease-in-out ${ sidebar ? 'w-16':'w-64' }`} style={style}>
        <header className={`flex items-center ${ sidebar ? 'justify-center':'justify-end'} h-20 `}>
            <a href="" className="text-2xl p-3 hover:bg-slate-200 rounded-md" onClick={handleCloseSidebar}>
                <BsLayoutSidebarInsetReverse/>
            </a>
        </header>
        <div className=" pt-4 overflow-hidden">
            <div className=" h-full">
                <ul className="">
                    <li className={`${ sidebar ? 'ml-0' :'ml-3'}`}>
                        <a href="" className={`group flex items-center ${ sidebar ? ' py-2 px-2': 'py-3 px-4'} text-3xl text-gray-500 hover:bg-gray-100 rounded-md `}>
                            <MdDashboard className='group-hover:text-gray-800'/>
                            <span className={`text-lg text-gray-400 font-normal ml-4 group-hover:text-gray-800 ${ sidebar ? 'hidden': 'inline-block'}`}>Dashboard</span>
                        </a>
                    </li>
                    <li className={`${ sidebar ? 'ml-0' :'ml-3'} flex flex-col`}>
                        <a href="" className={`group flex items-center ${ sidebar ? ' py-2 px-2': 'py-3 px-4'} text-3xl text-gray-500 hover:bg-gray-100 rounded-md `}>
                            <MdDashboard className='group-hover:text-gray-800'/>
                            <span className={`text-lg text-gray-400 font-normal ml-4 capitalize group-hover:text-gray-800 ${ sidebar ? 'hidden': 'inline-block'}`}>Members</span>
                            <BsChevronDown className={` ${ sidebar ? 'hidden' :'inline-bloc'} text-sm ml-10`}/>
                        </a>
                        <ul className={``}>
                            <li className={`${ sidebar ? 'ml-0' :'ml-3'}`}>
                                <a href="" className={` ${ sidebar ? ' px-4' :' pl-12 py-3'}  flex items-center  rounded-md text-md text-gray-500 hover:bg-gray-100  `}>
                                    <FaBirthdayCake className={` ${ sidebar ? 'mr-3':'' } `}/>
                                    <span className={`${ sidebar ? 'hidden' :'inline-bloc'} text-lg text-gray-400 font-normal ml-4 capitalize `}>Birthdays</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </aside>
  )
}

export default Sidebar