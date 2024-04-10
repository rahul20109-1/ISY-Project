import React from 'react'
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const ProfileBar = () => {
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            const res = await fetch('http://localhost:3000/api/user/logout',{
                headers:{
                    accept: 'application/json',
                    'User-agent': 'learning app',
                }
            });
            const data = await res.json();
            if(res.ok){
                toast.success(data.message);
                navigate('/login');
                return;
            }
            else{
                toast.error(data.message);
                return;
            }
        } catch (error) {
            toast.error(error.message);
            return;
        }
    }

  return (
    <nav className='flex w-full justify-between bg-green-500 p-5'>
      <span className='max-w-lg mx-auto text-xl font-semibold cursor-pointer'>Harshal kumar</span>
      <button onClick={handleLogout} className='bg-slate-700 text-sm p-2 text-white rounded-md hover:bg-slate-900'>Log out</button>
      <Toaster/>
    </nav>
  )
}

export default ProfileBar
