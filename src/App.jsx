import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import { routes } from './routing.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: routes
  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App