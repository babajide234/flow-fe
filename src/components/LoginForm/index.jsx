import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button'
import Input from '../Input'

const LoginForm = () => {
  return (
    <div className="w-full text-center">
        <h2 className=" capitalize text-4xl font-semibold mb-5 ">Sign in to your account</h2>
        <Input type="text" name="username" placeholder="username/email"/>
        <Input type="password" name="password" placeholder="password"/>
        <Button text={`Sign In`} link={`/dashboard`}/>

        <div className=" w-full flex mt-10 justify-center items-center">
            <Link to={`/register`} className=" capitalize font-extralight text-md hover:underline" >Create Account</Link>
            <span className=" block border-r-2 h-5 border-gray-400 m-3"></span>
            <Link to={``} className=" capitalize font-extralight text-md hover:underline" >Forgot password?</Link>
        </div>
    </div>
  )
}

export default LoginForm