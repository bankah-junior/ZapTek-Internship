import React from 'react'

const IconText = ({icon, text}) => {
  return (
    <div className="w-full md:w-[17%] flex flex-col justify-center items-center border-[1px] border-gray-400 hover:border-[#ffc451] py-[44px]">
        {icon}
        <p className="hover:text-[#ffc451] cursor-pointer mt-3 font-bold text-2xl transition-all duration-500 ease-linear text-center">{text}</p>
    </div>
  )
}

export default IconText