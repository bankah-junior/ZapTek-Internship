import React from 'react'

const IconCard = ({icon, title, text}) => {
  return (
    <div className='w-[45%] bg-[rgba(33,157,128,0.1)] p-2 md:mr-10'>
      <div className=" flex items-center mb-4">
        <img src={icon} alt="" />
        <h3 className="mx-2 font-bold text-lg text-[#219d80]">{title}</h3>
      </div>
      <p>{text}</p>
    </div>
  )
}

export default IconCard