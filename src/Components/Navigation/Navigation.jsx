import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signup from '../Signup/Signup'
import Login from '../Login/Login'
import Home from '../Home/Home'
import Teacherarea from '../Teacherarea/Teacherarea'


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/signup",
        element: <Signup />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/teacherarea",
        element: <Teacherarea />
    },
   

])


export default function Navigation() {
  return (
    <RouterProvider router={router} />
  )
}
