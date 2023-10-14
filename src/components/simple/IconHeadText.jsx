import React from 'react'

const IconHeadText = ({icon, heading, text, animeName, animeDuration, animeDelay}) => {
  return (
    <div className="flex flex-row space-x-5 lg:px-6" data-aos={animeName} data-aos-duration={animeDuration} data-aos-delay={animeDelay}>
        <div>{icon}</div>
        <div className='space-y-1'>
            <h3 className="font-bold text-2xl">{heading}</h3>
            <p className='text-sm'>{text}</p>
        </div>
    </div>
  )
}

export default IconHeadText