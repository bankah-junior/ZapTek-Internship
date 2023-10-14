import React, { useState } from 'react'
import { BiMenu } from 'react-icons/bi'
import { RiCloseFill } from 'react-icons/ri'
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom'
import './navbar.css'


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  const menu = (
    <>
      <a href='/#home' onClick={() => setToggleMenu(false)}>
        <li className='p-3 lg:p-0 hover:bg-[#ffc451] lg:hover:bg-transparent lg:hover:text-[#ffc451]'>Home</li>
      </a>
      <a href='/#about' onClick={() => setToggleMenu(false)}>
        <li className='p-3 lg:p-0 hover:bg-[#ffc451] lg:hover:bg-transparent lg:hover:text-[#ffc451]'>About</li>
      </a>
      <a href='/#services' onClick={() => setToggleMenu(false)}>
        <li className='p-3 lg:p-0 hover:bg-[#ffc451] lg:hover:bg-transparent lg:hover:text-[#ffc451]'>Service</li>
      </a>
      <a href='/#portfolio' onClick={() => setToggleMenu(false)}>
        <li className='p-3 lg:p-0 hover:bg-[#ffc451] lg:hover:bg-transparent lg:hover:text-[#ffc451]'>Portfolio</li>
      </a>
      <a href='/#team' onClick={() => setToggleMenu(false)}>
        <li className='p-3 lg:p-0 hover:bg-[#ffc451] lg:hover:bg-transparent lg:hover:text-[#ffc451]'>Team</li>
      </a>
      <Link>    {/*Drop down Links*/}
        <li className='dropdown-box relative lg:p-0  lg:hover:bg-transparent lg:hover:text-[#ffc451]'>
          <p className='p-3 lg:p-0 lg:hover:bg-transparent hover:bg-[#ffc451] flex space-x-2'>Drop Down <MdKeyboardArrowDown size={25} /></p>
          <div className="dropdown-menu hidden lg:absolute lg:top-6 lg:w-[200%] font-normal">
            <ul className='bg-white text-black lg:mt-4 lg:pt-4 lg:my-4 lg:m-0 m-2 shadow-2xl'>
              <Link onClick={() => setToggleMenu(false)}>
                <li className='hover:bg-[#ffc451] p-3 w-full'>Drop down 1</li>
              </Link>
              <div>
                <Link>
                  <li className='deep-dropdown-box lg:hover:bg-transparent lg:hover:text-[#ffc451] lg:p-0 w-full relative'>
                    <p className='p-3 lg:text-black hover:bg-[#ffc451] flex space-x-2'>Deep Drop Down <MdKeyboardArrowRight size={25} /></p>
                    <div className="deep-dropdown-menu hidden lg:absolute lg:top-0 lg:left-[11.9rem] w-full">
                      <ul className='bg-white text-black lg:mt-4 lg:pt-4 lg:my-4 lg:m-0 m-2 shadow-2xl'>
                        <Link onClick={() => setToggleMenu(false)}>
                          <li className='hover:bg-[#ffc451] p-3 w-full'>Deep drop down</li>
                        </Link>
                        <Link onClick={() => setToggleMenu(false)}>
                          <li className='hover:bg-[#ffc451] p-3 w-full'>Deep drop down</li>
                        </Link>
                        <Link onClick={() => setToggleMenu(false)}>
                          <li className='hover:bg-[#ffc451] p-3 w-full'>Deep drop down</li>
                        </Link>
                      </ul>
                    </div>
                  </li>
                </Link>
              </div>
              <Link onClick={() => setToggleMenu(false)}>
                <li className='hover:bg-[#ffc451] p-3 w-full'>Drop down 2</li>
              </Link>
              <Link onClick={() => setToggleMenu(false)}>
                <li className='hover:bg-[#ffc451] p-3 w-full'>Drop down 3</li>
              </Link>
              <Link onClick={() => setToggleMenu(false)}>
                <li className='hover:bg-[#ffc451] p-3 w-full'>Drop down 4</li>
              </Link>
            </ul>
          </div>
        </li>
      </Link>
      <a href='/#contact' onClick={() => setToggleMenu(false)}>
        <li className='p-3 lg:p-0 hover:bg-[#ffc451] lg:hover:bg-transparent lg:hover:text-[#ffc451]'>Contact</li>
      </a>
    </>
  )

  return (
    <div className='fixed w-full bg-[rgba(0,0,0,0.8)] text-white h-[91px] px-[15px] lg:px-[140px] flex flex-row items-center justify-between z-[999]'>
      {/* Brand name */}
      {!toggleMenu 
        && <Link to={'/'}><h1 className='text-3xl font-bold'>GP<span className='text-[#ffc451]'>.</span></h1></Link>
      }
      {/* End of Brand name */}

      {/* Menu */}
      <div className='font-medium'>
        <ul className='hidden lg:flex lg:flex-row space-x-6'> {/* lg above */}
          {menu}
        </ul>
        {toggleMenu && (
          <div className='lg:hidden absolute w-full top-[70px] left-0 bg-black'>
            <ul className='lg:hidden h-[85vh] flex flex-col m-4 bg-white text-black pt-4 overflow-y-scroll'>  {/* sm to md */}
              {menu}
            </ul>
          </div>
        )}
      </div>
      {/* End of Menu */}

      <div className='flex space-x-4 items-center'>
        {/* Call to action */}
        {!toggleMenu && (
            <div>
              <button className='uppercase w-[143px] h-[42px] rounded-md border-2 border-[#ffc451] hover:bg-[#ffc451] hover:text-[#4d4a3f]'>Get started</button>
            </div>
        )}
        {/* End of Call to action */}
        
        {/* stadio trader, create a demo account with flatfx,   */}
        
        {/* Toggle meun buttons */}
        <div className='lg:hidden'>
          { toggleMenu 
          ? <RiCloseFill color='white' size={27} onClick={() => setToggleMenu(false)} className='icon' /> 
          : <BiMenu color='white' size={27} onClick={() => setToggleMenu(true)} className='icon' /> }
        </div>
        {/* End of Toggle meun buttons */}
      </div>


    </div>
  )
}

export default Navbar