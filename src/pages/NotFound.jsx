import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='m-48 flex flex-col items-center'>
      <h1 className='text-2xl align-center mb-10'>Page not found...</h1>
      <Link
        className='mb-3 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded'
        to="/">Go Home</Link>
    </div>
  )
}

export default NotFound