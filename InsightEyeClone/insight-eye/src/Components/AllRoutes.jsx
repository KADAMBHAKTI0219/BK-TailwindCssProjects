import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import About from '../Pages/About'
import Service from '../Pages/Service'
import Contact from '../Pages/Contact'
import Pages from '../Pages/Pages'
import Blog from '../Pages/Blog'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/page" element={<Pages />} />
    
        </Routes>
    </div>
  )
}

export default AllRoutes
