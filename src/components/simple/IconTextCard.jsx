import React from 'react'
import './simple.css'

const IconTextCard = ({icon, heading, text, animeName, animeDuration, animeDelay}) => {
  return (
    <div className='icon-text-card lg:w-[25vw] lg:h-[35vh] md:w-[45vw] md:h-[48vh] h-[50vh] border-[1px] border-gray-400 hover:border-none hover:shadow-2xl flex flex-col justify-center items-center' data-aos={animeName} ata-aos-duration={animeDuration} data-aos-delay={animeDelay}>
      <div className='bg-[#ffc451] p-4 rounded-lg'>
        {icon}
      </div>
      <h2 className='text-2xl font-bold hover:text-[#ffc451] hover:blur-[0.3px] cursor-pointer mt-4'>{heading}</h2>
      <p className='text-center mt-4 px-4 md:px-2'>{text}</p>
    </div>
  )
}

export default IconTextCard