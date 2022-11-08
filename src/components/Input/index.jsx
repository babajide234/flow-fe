import React from 'react'

const Input = ({ type, name, placeholder}) => {
  return (
    <input type={type} name={name} placeholder={placeholder} className={` bg-gray-100 w-full mb-6 focus:outline-blue-600 py-3 px-6 rounded-lg placeholder:capitalize `} />
  )
}

export default Input