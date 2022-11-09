import React from 'react'
import RegisterForm from '../components/RegisterForm'

const Register = () => {
  return (
    <div className=" relative w-full h-screen flex">
        <div className=" w-8/12 px-32 h-full flex justify-center items-center">
            <RegisterForm/>
        </div>
        <div className=" w-1/3 h-screen bg-cover bg-[url('https://flow.eloope.com/wp-content/uploads/2022/09/micah-boswell-OPnBJ5L2oxs-unsplash-scaled.jpg')]" ></div>
    </div>
  )
}

export default Register