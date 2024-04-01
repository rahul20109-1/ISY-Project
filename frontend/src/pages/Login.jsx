import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
const Login = () => {
  return (
    <div className='p-3 max-w-lg mx-auto space-y-5 mt-24'>
        <h1 className='text-3xl text-center'>Log in here</h1>
        <form className='flex flex-col gap-3 mx-5'>
          <input type="email" id='email' placeholder='john@example.com' required className='border border-black bg-slate-300 px-5 py-1 rounded-md text-black focus:outline-none' />
          <input type="password" id='password' placeholder='*************' required className='border border-black bg-slate-300 px-5 py-1 rounded-md text-black focus:outline-none' />
          <div className='space-x-2 text-sm'>
            <span>Don't have an account?</span>
            <Link to={'/register'} className='text-blue-600 hover:underline'>Register</Link>
          </div>
          <button className='bg-slate-600 text-white font-semibold px-3 py-2 hover:bg-slate-900 mx-44 rounded-full'>Log in</button>
        </form>
    </div>
  )
}

export default Login
