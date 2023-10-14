import React, { useState } from 'react'
import ScrollTrigger from 'react-scroll-trigger';

const SectionTitle = ({mainHead, subHead, animeName, animeDuration}) => {
  const [counterOn, setCounterOn] = useState(false)

  return (
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
      {counterOn && (
        <div className='space-y-1 mb-8 slide-in-bottom' data-aos={animeName} data-aos-duration={animeDuration}>
          <div className="flex flex-row items-center">
            <h3 className='font-semibold opacity-50'>{subHead}</h3>
            <div className='w-[150px] h-[1px] bg-[#ffc451] ml-3'></div>
          </div>
          <h2 className='text-3xl font-black'>{mainHead}</h2>
        </div>
      )}
    </ScrollTrigger>
  )
}

export default SectionTitle