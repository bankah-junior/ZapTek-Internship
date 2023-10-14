import React from 'react'

const SectionTitle = ({mainHead, subHead, animeName, animeDuration}) => {
  return (
    <div className='space-y-1 mb-8' data-aos={animeName} data-aos-duration={animeDuration}>
      <div className="flex flex-row items-center">
        <h3 className='font-semibold opacity-50'>{subHead}</h3>
        <div className='w-[150px] h-[1px] bg-[#ffc451] ml-3'></div>
      </div>
      <h2 className='text-3xl font-black'>{mainHead}</h2>
    </div>
  )
}

export default SectionTitle