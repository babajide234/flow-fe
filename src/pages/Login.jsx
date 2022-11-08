import React from 'react'
import LoginForm from '../components/LoginForm'

const Login = () => {
  return (
    <>
        <div className=" relative w-full h-screen flex">
                <div className=" w-8/12 px-64 h-full flex justify-center items-center">
                    <LoginForm/>
                </div>
                <div className=" w-1/3 h-screen bg-cover bg-[url('https://flow.eloope.com/wp-content/uploads/2022/09/micah-boswell-OPnBJ5L2oxs-unsplash-scaled.jpg')]" ></div>
        </div>
    </>
  )
}

export default Login