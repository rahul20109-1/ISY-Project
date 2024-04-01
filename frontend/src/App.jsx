import React from 'react'
import Home from './pages/Home'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
