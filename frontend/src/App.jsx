import React from 'react'
import Home from './pages/Home'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardPage from './pages/DashboardPage';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/dashboard' element={<DashboardPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
