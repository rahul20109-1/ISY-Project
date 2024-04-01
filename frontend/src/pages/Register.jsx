import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import toast, {Toaster} from 'react-hot-toast';
const Register = () => {
  const handleSubmit = () => {
    toast.error('done');
  }
  return (
    <div className='p-3 max-w-lg mx-auto space-y-5 mt-24'>
        <h1 className='text-3xl text-center'>Register here</h1>
        <form className='flex flex-col gap-3 mx-5'>
          <input type="text" id='username' placeholder='john jason' required className='border border-black bg-slate-300 px-5 py-1 rounded-md text-black focus:outline-none' />
          <input type="email" id='email' placeholder='john@example.com' required className='border border-black bg-slate-300 px-5 py-1 rounded-md text-black focus:outline-none' />
          <input type="password" id='password' placeholder='*************' required className='border border-black bg-slate-300 px-5 py-1 rounded-md text-black focus:outline-none' />
          <div className='space-x-2 text-sm'>
            <span>Already have an account?</span>
            <Link to={'/login'} className='text-blue-600 hover:underline'>Login</Link>
          </div>
          <button onClick={handleSubmit} className='bg-slate-600 text-white font-semibold px-3 py-2 hover:bg-slate-900 mx-44 rounded-full'>Submit</button>
        </form>
        <Toaster/>
    </div>
  )
}

export default Register
