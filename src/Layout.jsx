import React from 'react'
import Header from './pages/Header'
import Footer from './pages/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
    <Header/>
  <Outlet/>
    <Footer/>
    
    </div>
  )
}

export default Layout