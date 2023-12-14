import React from 'react'
import Navbar from './Navbar'
import "../assets/css/layout.css"
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <div className='layout-container'>
      <Navbar />
      {/* <div style={{ marginTop: "80px" }}></div> */}
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout