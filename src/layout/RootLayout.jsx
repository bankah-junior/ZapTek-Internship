import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Navbar, PageLoader } from '../components'

const RootLayout = () => {
  return (
    <div className='relative'>
      <PageLoader />
      <Navbar />
        <Outlet />
      <Footer />
    </div>
  )
}

export default RootLayout