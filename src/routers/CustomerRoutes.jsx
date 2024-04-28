import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../customer/pages/HomePage/HomePage'
import Navbar from '../customer/components/Navbar/Navbar'




export const CustomerRoutes = () => {
  return (
    <div className='relative'>
      <div className='sticky top-0 z-50'>
        <Navbar/>
      </div>
      <Routes>
        <Route path='/' element={<HomePage/>}>
       

          </Route>
        

        
    </Routes>
    </div>
  )
}

export default CustomerRoutes
