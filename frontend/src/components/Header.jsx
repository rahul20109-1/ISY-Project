import React from 'react'
import {useNavigate} from 'react-router-dom'
const Header = () => {
  const navigate = useNavigate();
  const handleClick = () => {
      navigate('/login')
  }
  return (
    <header className='flex justify-between bg-slate-600 p-5'>
      <div className='text-white font-medium text-xl'>
        LOGO
      </div>
      <div>
        <button onClick={handleClick} className='bg-blue-400 rounded-lg hover:bg-blue-600 px-3 py-1 text-sm text-white font-medium'>Log in</button>
      </div>
    </header>
  )
}

export default Header
