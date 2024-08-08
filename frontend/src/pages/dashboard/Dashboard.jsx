import React from 'react'
// import Header from '../../components/header/Header'
// import Sidebar from '../../components/sidebar/Sidebar'
// import { Outlet } from 'react-router-dom'
import Dashboard1 from '../../components/dashboard/Dashboard'

const Dashboard = () => {
  return (
    <div className='flex flex-row h-screen'>
      {/* <Sidebar />
      <div className="ml-80 bg-gray-200 w-screen h-screen">
        <Header />
        <Outlet />
      </div> */}
      <Dashboard1 />
    </div>
  )
}

export default Dashboard