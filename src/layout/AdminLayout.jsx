import React from 'react'
import TopBar from '../components/SideBar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
<>
<TopBar/>
<Outlet/>
</>  )
}

export default AdminLayout