import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiCloseFill, RiMenuFill } from 'react-icons/ri';

const Navbar = () => {
    const [nav1, setNav1] = useState("");
    const [nav2, setNav2] = useState("");
    const [nav3, setNav3] = useState("");
    const [toggleMenu, setToggleMenu] = useState(false);

    const handleMenu1 = () => {
        setNav1("text-yellow-600 underline")
        setNav2("")
        setNav3("")
    }
    const handleMenu2 = () => {
        setNav1("")
        setNav2("text-yellow-600 underline")
        setNav3("")
    }
    const handleMenu3 = () => {
        setNav1("")
        setNav2("")
        setNav3("text-yellow-600 underline")
    }
    
    return (
        <div className='absolute w-full' style={{zIndex: 999, backgroundColor: "rgba(0,0,0,0.9)"}}>
            <div className='fitsight__navbar w-full flex justify-between items-center p-6'>
                <Link to={'/'} className='text-yellow-600 font-bold text-4xl'>FITSIGHT</Link>
                <div className='hidden md:flex'>
                    <p><Link to={'/'} className={nav1 + " ml-20 text-white text-2xl"} onClick={handleMenu1}>Home</Link></p>
                    <p><Link to={'/about-us'} className={nav2 + " ml-20 text-white text-2xl"} onClick={handleMenu2}>About US</Link></p>
                    <p><Link to={'/lets-talk'} className={nav3 + " ml-20 mr-12 text-white text-2xl"} onClick={handleMenu3}>Let's Talk!</Link></p>
                </div>
                <div className="fitsight__navbar-menu md:hidden flex flex-row-reverse items-center">
                    {toggleMenu
                        ? <RiCloseFill color='white' size={30} className='cursor-pointer rotate-center' onClick={() => setToggleMenu(false)} />
                        : <RiMenuFill color='white' size={30} className='cursor-pointer scale-in-center' onClick={() => setToggleMenu(true)}/> 
                    }
                </div>
            </div>
            {toggleMenu && (
                <div className="fitsight__navbar-menu_container">
                    <div className="fitsight__navbar-menu_container-links flex flex-col justify-center items-center mb-4">
                        <p className='w-full text-center p-4 hover:bg-yellow-c100 transition-colors duration-200 ease-in slide-in-top-menu1'><Link to={'/'} className={nav1 + " text-white mr-6 block"} onClick={handleMenu1}>Home</Link></p>
                        <p className='w-full text-center p-4 hover:bg-yellow-c100 transition-colors duration-200 ease-in slide-in-top-menu2'><Link to={'/about-us'} className={nav2 + " text-white mr-6 block"} onClick={handleMenu2}>About US</Link></p>
                        <p className='w-full text-center p-4 hover:bg-yellow-c100 transition-colors duration-200 ease-in slide-in-top-menu3'><Link to={'/lets-talk'} className={nav3 + " text-white mr-6 block"} onClick={handleMenu3}>Let's Talk!</Link></p>
                    </div>
                </div>
            )}
        </div>
  )
}

export default Navbar