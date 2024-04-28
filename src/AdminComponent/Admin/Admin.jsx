import React from 'react'
import { AdminSideBar } from './AdminSideBar'
import { RestaurantDashboard } from '../Dashboard/Dashboard'
import { Menu } from '@mui/material'
import Events from '../Events/CreateEvent'
import Ingredients from '../Ingredients/Ingredients'
import { FoodCategory } from '../FoodCategory/FoodCategory'
import { Orders } from '../Orders/Orders'
import { RestaurantDetails } from '../Details/RestaurantDetails'
import {Routes,Route} from 'react-router-dom'
import {CreateMenuForm} from '../Menu/CreateMenuForm'

export const Admin = () => {
    const handleClose=()=>{

    }
  return (
    <div>
      <div className='lg:flex justify-between'>
           <AdminSideBar handleClose={handleClose}/> 
           admin
      </div>
      <div className='lg:w-[80%]'>
        <Routes>
          <Route path='/' element={<RestaurantDashboard/>}/>
          <Route path='/Orders' element={<Orders/>}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/category' element={<FoodCategory/>}/>
          <Route path='/event' element={<Events/>}/>
          <Route path='/ingredients' element={<Ingredients/>}/>
          <Route path='/Details' element={<RestaurantDetails/>}/>
          <Route path='/add-menu' element={<CreateMenuForm/>}/>
        </Routes>
      </div>
    </div>
  )
}

