import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { selectUser } from '../../redux/user/selectors'

const Header = () => {

  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("persist:root")
    navigate("/auth")
  }

  const user = useSelector(selectUser)

  return (
    <>
      {
        user?.email && localStorage.getItem("persist:root")
        && <header className='flex justify-between items-center my-5 py-5 px-2'>
          <h1>Hello, some user</h1>
          <nav className='flex gap-5'>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 no-underline"
                  : "text-black no-underline"
              }
              to={"/"}>About me</NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 no-underline"
                  : "text-black no-underline"
              }
              to={"/notes"}>Notes</NavLink>
            <p onClick={handleLogout} className='cursor-pointer'>Log out</p>
          </nav>
        </header>
      }

    </>

  )
}

export default Header