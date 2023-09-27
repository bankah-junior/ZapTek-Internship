import React from 'react';
import './hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero__container h-80 md:h-[44rem] w-full relative" id='home'>
      <div className="flex flex-col items-center justify-center absolute w-full h-full top-0 left-0 bg-[rgba(0,0,0,0.3)]">
        <h5 className="text-white font-semibold md:text-xl">Give Hope For Homeless</h5>
        <h2 className="text-white text-center font-bold font-serif text-2xl md:text-6xl mt-2">
          Helping Each Other <br /> Can Make World Better
        </h2>
        <p className="text-center md:text-xl capitalize text-[#d8d8d9] mt-2">
        we seek out world changers and difference makers around the <br className='hidden md:block' /> globe, and equip them to fulfill their unique purpose.
        </p>
        <div className='mt-8'>
          <button className='md:px-4 md:py-2 p-2 text-white border-2 border-[#219d80] bg-[#219d80] mx-8'>Donate Now</button>
          <Link to={"#about-us"}>
            <button className='md:px-4 md:py-2 p-2 text-white border-2 border-[#219d80] mx-4'>Know About Us</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero