import React from 'react'
import Sidebar from '../components/Sidebar'
import DashContent from '../components/DashContent'
import ProfileBar from '../components/ProfileBar'

const DashboardPage = () => {
  return (
    <div className='bg-slate-500 min-h-screen max-w-full'>
      <ProfileBar/>
      <div className='flex justify-between mx-3 mt-7'>
        <Sidebar/>
        <DashContent/>
      </div>
    </div>
  )
}

export default DashboardPage
