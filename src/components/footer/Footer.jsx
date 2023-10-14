import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaSkype } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className=''>
      <div className="px-[15px] lg:px-[140px] flex flex-col lg:flex-row py-[75px] bg-[#151515] text-white w-full">
        <div className="flex flex-col md:flex-row w-full justify-between lg:w-1/2 space-y-7 md:space-y-0 mb-7 md:mb-16 lg:mb-0">
          <div className="w-full md:w-1/2">
            <Link to={'/'}><h1 className='text-3xl font-bold'>GP<span className='text-[#ffc451]'>.</span></h1></Link> <br />
            <p>A108 Adam Street <br /> NY 535022. USA</p> <br />
            <div>
              <p><b>Phone:</b> <a href="tel:+155895548855">+1 5589 55488 55</a></p>
              <p><b>Email:</b> <a href="mailto:info@example.com">info@example.com</a></p>
            </div><br />
            <div className="flex flex-row justify-between w-[70%]">
              <div className='bg-[rgba(255,255,255,0.2)] p-1 rounded-md hover:bg-[#ffc451] hover:text-[rgba(0,0,0,0.9)] transition-all duration-500 ease-linear cursor-pointer'>
                <FaTwitter size={25} />
              </div>
              <div className='bg-[rgba(255,255,255,0.2)] p-1 rounded-md hover:bg-[#ffc451] hover:text-[rgba(0,0,0,0.9)] transition-all duration-500 ease-linear cursor-pointer'>
                <FaFacebookF size={25} />
              </div>
              <div className='bg-[rgba(255,255,255,0.2)] p-1 rounded-md hover:bg-[#ffc451] hover:text-[rgba(0,0,0,0.9)] transition-all duration-500 ease-linear cursor-pointer'>
                <FaInstagram size={25} />
              </div>
              <div className='bg-[rgba(255,255,255,0.2)] p-1 rounded-md hover:bg-[#ffc451] hover:text-[rgba(0,0,0,0.9)] transition-all duration-500 ease-linear cursor-pointer'>
                <FaSkype size={25} />
              </div>
              <div className='bg-[rgba(255,255,255,0.2)] p-1 rounded-md hover:bg-[#ffc451] hover:text-[rgba(0,0,0,0.9)] transition-all duration-500 ease-linear cursor-pointer'>
                <FaLinkedinIn size={25} />
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h1 className='font-bold text-xl'>Useful Links</h1>
            <ul className='pl-2 space-y-4 mt-3'>
              <li className='hover:text-[#ffc451]'>
                <Link><span className='text-[#ffc451] mr-2'>&gt;</span>Home</Link>
              </li>
              <li className='hover:text-[#ffc451]'>
                <Link><span className='text-[#ffc451] mr-2'>&gt;</span>About Us</Link>
              </li>
              <li className='hover:text-[#ffc451]'>
                <Link><span className='text-[#ffc451] mr-2'>&gt;</span>Services</Link>
              </li>
              <li className='hover:text-[#ffc451]'>
                <Link><span className='text-[#ffc451] mr-2'>&gt;</span>Terms of Service</Link>
              </li>
              <li className='hover:text-[#ffc451]'>
                <Link><span className='text-[#ffc451] mr-2'>&gt;</span>Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full justify-between lg:w-1/2 space-y-7 md:space-y-0">
          <div className="w-full md:w-1/2">
            <h1 className='font-bold text-xl'>Our Services</h1>
            <ul className='pl-2 space-y-4 mt-3'>
              <li className='hover:text-[#ffc451]'>
                <Link><span className='text-[#ffc451] mr-2'>&gt;</span>Web Design</Link>
              </li>
              <li className='hover:text-[#ffc451]'>
                <Link><span className='text-[#ffc451] mr-2'>&gt;</span>Web Development</Link>
              </li>
              <li className='hover:text-[#ffc451]'>
                <Link><span className='text-[#ffc451] mr-2'>&gt;</span>Product Management</Link>
              </li>
              <li className='hover:text-[#ffc451]'>
                <Link><span className='text-[#ffc451] mr-2'>&gt;</span>Marketing</Link>
              </li>
              <li className='hover:text-[#ffc451]'>
                <Link><span className='text-[#ffc451] mr-2'>&gt;</span>Graphic Design</Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2">
            <h1 className='font-bold text-xl'>Our Newletter</h1><br />
            <p> Tamen quem nulla quae legam multos aute sint culpa legam noster magna </p><br />
            <div className="flex flex-row">
              <input type="email" name="email" id="email" className='border-none outline-none rounded-l-md'/>
              <button className='bg-[#ffc451] hover:bg-[rgba(255,196,81,0.9)] px-4 py-2 rounded-r-md text-[rgba(0,0,0,0.8)] font-semibold'>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <center className='bg-black text-white space-y-2 py-11 px-[15px] lg:px-[140px]'>
        <p>&copy; Copyright <b>GP.</b> All Rights Reserved</p>
        <p>Designed by <a href="#h" className='text-[#ffc451]'>BootstrapMade</a></p>
      </center>
    </div>
  )
}

export default Footer