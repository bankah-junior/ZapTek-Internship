import React from 'react'
import headerBgImage from '../../assets/Screenshot 2022-03-05 at 16.03 2.png'
import fitsightBrandImg from '../../assets/Sin título-1 1.png'
import fitsightBrandLogo from '../../assets/Sin título-1 4.png'

const Home = () => {
  return (
    <div className='homePage__container relative w-full h-screen overflow-hidden'>
      <img src={headerBgImage} alt='' className='w-full h-full pt-4' />
      <div className='w-full h-full md:h-16 flex flex-col justify-center items-center absolute top-0 md:top-64 md:left-c-10'>
        <img src={fitsightBrandImg} alt='' className='' />
        <p className='text-white text-right font-bold text-lg'>MAKING YOUR BRAND <span className="text-yellow-600">FIT</span></p>
      </div>
      <div className="absolute md:bottom-c7 md:mr-12" style={{bottom: ".5rem", right: "-7rem"}} >
        <img src={fitsightBrandLogo} alt="" className='w-100-40' />
      </div>
    </div>
  )
}

export default Home