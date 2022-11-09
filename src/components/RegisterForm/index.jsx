import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button'
import Input from '../Input'

const RegisterForm = () => {
  return (
    <>
        <div className="w-full text-center">
            <h2 className=" capitalize text-4xl font-semibold mb-5 ">Membership Form</h2>
            <Input type={`text`} name={`username`} placeholder={`Create Username`} label={`username`}/>
            <div className="flex gap-5">
                <div className=" basis-1/2">
                    <Input type={`text`} name={`username`} placeholder={`Create Password`} label={`username`}/>
                </div>
                <div className=" basis-1/2">
                    <Input type={`text`} name={`username`} placeholder={`Retype Password`} label={`username`}/>
                </div>
            </div>
            <div className="flex gap-5">
                <div className=" basis-1/2">
                    <Input type={`text`} name={`username`} placeholder={`First Name`} label={`username`}/>
                </div>
                <div className=" basis-1/2">
                    <Input type={`text`} name={`username`} placeholder={`Last Name`} label={`username`}/>
                </div>
            </div>
            <div className="flex gap-5 ">
                <div className=" basis-1/4">
                    <Input type={`text`} name={`username`} placeholder={`Email`} label={`username`}/>
                </div>
                <div className=" basis-1/4">
                    <Input type={`text`} name={`username`} placeholder={`phone`} label={`username`}/>
                </div>
                <div className=" basis-1/4">
                    <Input type={`text`} name={`username`} placeholder={`Birthday`} label={`username`}/>
                </div>
                <div className=" basis-1/4">
                    <Input type={`text`} name={`username`} placeholder={`Gender`} label={`username`}/>
                </div>
            </div>
            <div className="flex flex-wrap">
                <div className=" basis-full">
                    <Input type={`text`} name={`username`} placeholder={`Address`} label={`username`}/>
                </div>
                <div className="flex gap-5 w-full">
                    <div className=" basis-1/2">
                        <Input type={`text`} name={`username`} placeholder={`City`} label={`username`}/>
                    </div>
                    <div className=" basis-1/2">
                        <Input type={`text`} name={`username`} placeholder={`State`} label={`username`}/>
                    </div>
                </div>
                <div className=" basis-1/2">
                    <Input type={`text`} name={`username`} placeholder={`Zip Code`} label={`username`}/>
                </div>
            </div>
            <div className="">
                <Button text={`Submit`} link={`/`}/>
                <p className=" text-sm mt-4">By joining, you agree to the <Link to={`/`} className={` underline `}>Privacy Policy</Link></p>
            </div>
        </div>
    </>
  )
}

export default RegisterForm