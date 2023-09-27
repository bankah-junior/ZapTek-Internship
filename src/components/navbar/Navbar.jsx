import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu4Fill, RiCloseFill  } from 'react-icons/ri';
import logo from '../../assets/logo.jpg';
import './navbar.css';

const menu = (
    <>
        <a href={'#home'} className='w-full'><p className='text-center py-4 border-b-2 border-white rounded-md md:bg-[rgba(255,255,255,0.2)] bg-[rgba(0,0,0,0.2)]'>Home</p></a>
        <a href={'#gallery'} className='w-full'><p className='text-center py-4 border-b-2 border-white rounded-md md:bg-[rgba(255,255,255,0.2)] bg-[rgba(0,0,0,0.2)]'>Gallery</p></a>
        <p className=' w-full md:flex text-center py-4 border-b-2 border-white rounded-md md:bg-[rgba(255,255,255,0.2)] bg-[rgba(0,0,0,0.2)]'>
            <a className='md:block md:w-24' href={"#about-us"}>About Us </a>
            <select name="About Us" id="aboutUs" className='border-none ml-2 w-0 p-0 text-black bg-transparent cursor-pointer'>
                <option value=""></option>
                <option value="Drop 1">Drop 1</option>
                <option value="Drop 2">Drop 2</option>
                <option value="Drop 3">Drop 3</option>
            </select>
        </p>
        <p className=' w-full md:flex text-center py-4 border-b-2 border-white rounded-md md:bg-[rgba(255,255,255,0.2)] bg-[rgba(0,0,0,0.2)]'>
            <a className='md:block md:w-24' href={"#how-we-help"}>How we help</a>
            <select name="How we help" id="howWeHelp" className='border-none ml-2 w-0 p-0 text-black bg-transparent cursor-pointer'>
                <option value="Drop 1">Drop 1</option>
                <option value="Drop 2">Drop 2</option>
                <option value="Drop 3">Drop 3</option>
            </select>
        </p>
    </>
)

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

  return (
    <>
        <navbar className="flex justify-between items-center pl-2 pr-4 md:pl-6 md:pr-10 md:py-2 shadow-lg">
            <Link to={"/"} >
                <img src={logo} alt="logo" />
            </Link>

            {/* default to medium devices menu */}
            <div className="md:hidden">
                {!toggle
                    ? <RiMenu4Fill size={30} className='cursor-pointer scale-in-hor-center' onClick={() => setToggle(true)} />
                    : <RiCloseFill size={30} className='cursor-pointer rotate-in-center' onClick={() => setToggle(false)} />
                }
            </div>
            {/* End of default to medium devices menu */}

            {/* Medium devices up menu */}
            <div className='hidden md:flex items-center space-x-20'>
                {menu}
            </div>
            {/* End of medium devices up menu */}

            <button className='md:px-4 md:py-2 p-2 text-white bg-[#219d80] hover:opacity-70'>Contact Us</button>

        </navbar>
        {toggle && (
            <div className="slide-in-fwd-left absolute space-y-8 p-8 bg-slate-600 w-full h-screen flex flex-col items-center md:hidden text-white z-50 font-bold">
                {menu}
            </div>
        )}
    </>
  )
}

export default Navbar