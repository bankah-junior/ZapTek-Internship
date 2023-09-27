import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Navbar } from '../components';


const RootLayout = () => {
  return (
    <div>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default RootLayout