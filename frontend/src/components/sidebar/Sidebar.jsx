import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useGetProfileQuery } from '../../context/api/userApi'

const Sidebar = () => {

  const { data, isSuccess } = useGetProfileQuery()

  return (
    <div className='flex w-80 bg-black text-black h-screen flex-col fixed gap-3'>
      <div className="flex flex-row items-center gap-2 p-4">
        <div className="w-16 h-16 flex items-center justify-center bg-slate-900 rounded-[50%] text-white text-3xl">
          {data?.payload?.fname[0]}
        </div>
        <div className="flex flex-col items-center text-white ">
          <h1 className='text-white'>{data?.payload?.fname}</h1>
          <p className='text-xs'>{data?.payload?.role}</p>
        </div>
      </div>
      <NavLink className='p-4 active: bg-white m-3 rounded-md' to={"/dashboard/manageblog"}> Managa Blogs</NavLink>
    </div>
  )
}

export default Sidebar