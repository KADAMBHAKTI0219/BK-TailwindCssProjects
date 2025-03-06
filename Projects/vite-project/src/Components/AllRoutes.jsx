import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Service from '../Pages/Service'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import { ThemeContext } from '../Context/ThemeContext'

const AllRoutes = () => {
  const {darkMode} = useContext(ThemeContext)
  return (
    <div className={darkMode ? 'dark:bg-gray-900 dark:text-white' : 'bg-white'}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />     
      </Routes>
    </div>
  )
}

export default AllRoutes
