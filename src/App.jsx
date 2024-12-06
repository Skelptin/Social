import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'

const App = () => {
  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen 
    bg-gradient-to-b from-teal-50 to-orange-50 '>

      <Navbar />

      <Routes>
        <Route path='/login' element={<Login />} />
      </Routes>

    </div>
  )
}

export default App