import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ text, link}) => {
  return (
    <Link to={link} className={` bg-blue-600 hover:bg-blue-500 rounded-lg py-3 px-6 w-full flex justify-center text-white font-semibold capitalize `} >{text}</Link>
  )
}

export default Button