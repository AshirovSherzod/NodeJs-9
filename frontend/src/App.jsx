// import { useState } from 'react's

import { Navigate, Route, Routes } from "react-router-dom"
import Login from "./pages/login/Login"
import Dashboard from "./pages/dashboard/Dashboard"
import Auth from "./pages/auth/Auth"
import ManagaBlogs from "./pages/dashboard/manageBlogs/ManagaBlogs"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to={"/login"} replace />} />
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Auth />}>
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="manageblog" element={<ManagaBlogs />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
