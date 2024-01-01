import React from 'react'
import TopBar from '../components/TopBar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
<>
<TopBar/>
{/* <h1>a</h1> */}
<Outlet/>
{/* <CreateAdminPage/> */}
</>  )
}

export default AdminLayout