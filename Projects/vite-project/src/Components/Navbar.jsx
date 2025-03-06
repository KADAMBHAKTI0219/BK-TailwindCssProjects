import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ThemeContext } from '../Context/ThemeContext'

const Navbar = () => {
  const {darkMode,toggleTheme} = useContext(ThemeContext)
  return (
    <div className='flex justify-around items-center text-lg h-16 bg-white-800 text-black dark:bg-gray-900 dark:text-white border-b-4 dark:border-0'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/service">Service</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <button onClick={toggleTheme} className="px-4 py-2 rounded bg-white text-black dark:bg-gray-600 dark:text-white transition border-2">{darkMode ? 'Light' : 'Dark'}</button>
    </div>
  )
}

export default Navbar
