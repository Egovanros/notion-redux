import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {
  return (
    <div className='p-8'>
        <Header />
        <main className='flex pb-5 justify-center'>
           <Outlet /> 
        </main>
        <Footer />
    </div>
  )
}

export default Layout