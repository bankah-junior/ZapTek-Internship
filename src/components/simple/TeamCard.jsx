import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const TeamCard = ({img, name, post, animeName, animeDuration, animeDelay}) => {
  return (
    <div className='team-card shadow-xl rounded-md' data-aos={animeName} data-aos-duration={animeDuration} data-aos-delay={animeDelay}>
      <div className='relative'>
        <img src={img} alt="" />
        <div className="team-card-media hidden absolute bottom-4 left-16 flex-row space-x-4 text-[rgb(21,21,21,0.7)]">
          <div className='slide-in-top bg-[rgba(255,255,255,0.7)] p-[4px] rounded-md hover:bg-[#ffc451] hover:text-[rgb(21,21,21)] transition-all ease-in duration-500 cursor-pointer'>
            <FaTwitter /> 
          </div>
          <div className='slide-in-top bg-[rgba(255,255,255,0.7)] p-[4px] rounded-md hover:bg-[#ffc451] hover:text-[rgb(21,21,21)] transition-all ease-in duration-500 cursor-pointer'>
            <FaFacebookF /> 
          </div>
          <div className='slide-in-top bg-[rgba(255,255,255,0.7)] p-[4px] rounded-md hover:bg-[#ffc451] hover:text-[rgb(21,21,21)] transition-all ease-in duration-500 cursor-pointer'>
            <FaInstagram /> 
          </div>
          <div className='slide-in-top bg-[rgba(255,255,255,0.7)] p-[4px] rounded-md hover:bg-[#ffc451] hover:text-[rgb(21,21,21)] transition-all ease-in duration-500 cursor-pointer'>
            <FaLinkedinIn /> 
          </div>
        </div>
      </div>
      <div className="p-4">
        <h2 className='font-bold text-xl'>{name}</h2>
        <p className='opacity-60 text-sm'>{post}</p>
      </div>
    </div>
  )
}

export default TeamCard