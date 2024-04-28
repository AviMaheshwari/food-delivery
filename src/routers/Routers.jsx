import React from "react"
import { Route, Routes } from "react-router-dom"
import { AdminRoute } from "./AdminRoute"
import { CustomerRoutes } from "./CustomerRoutes"
import { Admin } from "../AdminComponent/Admin/Admin"

const Routers = () => {
  return (
    <Routes>
      <Route path='/admin/restaurant/*' element={<AdminRoute />}></Route>
      <Route path='/*' element={<CustomerRoutes />}></Route>
      <Route path='/Admin' element={<Admin/>}>
          </Route>
          
    </Routes>

)
  
}
export default Routers

