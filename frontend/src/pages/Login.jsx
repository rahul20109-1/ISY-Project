import React,{useState} from 'react'
import toast, { Toaster } from 'react-hot-toast';
import {Link, useNavigate} from 'react-router-dom'
const Login = () => {
  const [formDataInfo, setFormDataInfo] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:3000/api/user/login',{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(formDataInfo)
      })
      const data = await res.json();
      if(res.ok){
        toast.success(data.message);
        navigate('/dashboard');
      }
      else{
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error);
    }
  }
  const handleChange = (e) => {
    setFormDataInfo({
      ...formDataInfo,
      [e.target.id]:e.target.value
    })
  }
  return (
    <div className='p-3 max-w-lg mx-auto space-y-5 mt-24'>
        <h1 className='text-3xl text-center font-medium '>Log in here</h1>
        <form className='flex flex-col gap-3 mx-5' onSubmit={handleSubmit}>
          <input onChange={handleChange} type="email" id='email' placeholder='john@example.com' required className='bg-slate-200 p-2 rounded-md focus:outline-none shadow-md' />
          <input onChange={handleChange} type="password" id='password' placeholder='*************' required className='bg-slate-200 p-2 rounded-md focus:outline-none shadow-md' />
          <div className='space-x-2 text-sm'>
            <span>Don't have an account?</span>
            <Link to={'/register'} className='text-blue-600 hover:underline'>Register</Link>
          </div>
          <button type='submit' className='bg-slate-700 text-white font-semibold px-3 py-2 hover:bg-slate-900 rounded-lg'>Log in</button>
        </form>
        <Toaster/>
    </div>
  )
}

export default Login
