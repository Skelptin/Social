import React from 'react'
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    return (
        <div className=' absolute top-0 left-0 right-0 bottom-0 m-6 flex items-center justify-center   '>

            <form className='flex flex-col relative gap-4 bg-white p-10 rounded-xl text-slate-500'>

                <h1 className='text-3xl text-center'>Login</h1>
                <p>Welcome back! Please login to your account</p>

                <div className='border px-6 py-2 flex items-center rounded-full'>
                    <img className='w-5' alt="" />
                    <input className='outline-none text-sm' type="text" placeholder='Name' required />
                </div>

                <div className='border px-6 py-2 flex items-center  rounded-full'>
                    <img className='w-5' alt="" />
                    <input className='outline-none text-sm' type="email" placeholder='Email id' required />
                </div>

                <div className='border px-6 py-2 flex items-center  rounded-full'>
                    <img className='w-5' alt="" />
                    <input className='outline-none text-sm' type="password" placeholder='Password' required />
                </div>

                <p className='text-blue-400'> Forgot Password?</p>
                <button className='bg-blue-600 p-2 rounded-lg text-white'>Login</button>
                <div className='w-full bg-gray-700 p-2 rounded-lg text-white flex  items-center justify-center'>

                    <button className='flex items-center'>  <FcGoogle className='m-1' size={20} />Continue with Google</button>
                </div>
                <p>Don't have an account? <span className='text-blue-400 underline'> SignUp </span></p>

            </form>

        </div>
    )
}

export default Login