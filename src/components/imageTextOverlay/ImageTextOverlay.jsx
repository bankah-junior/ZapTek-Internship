import React from 'react'

const ImageTextOverlay = ({img1}) => {
  return (
    <div className='w-96 md:w-[25rem] p-6 md:p-0 md:ml-12 ml-0 mt-6'>
      <div className='w-full'>
        <img src={img1} alt="" className='w-4/5 border-8 border-[#d3ebe6]' />
      </div>
      <div className='w-full flex justify-end -translate-y-24'>
        <div className='w-2/3 border-8 border-[#d3ebe6] bg-white'>
          <ul className='list-disc list-inside space-y-4 p-4 text-sm md:text-base'>
            <li className='text-[#219D80]'>Together, We're Going To Make The Future</li>
            <li>Children Where We Are Able To Fulfill All</li>
            <li>Their Requirements To Keep Them Safe From Withered World</li>
            <li>We Have Already Stepped Out And Start Changibg The World</li>
            <li>Keeping Safe Them From War, Inhumanity</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ImageTextOverlay