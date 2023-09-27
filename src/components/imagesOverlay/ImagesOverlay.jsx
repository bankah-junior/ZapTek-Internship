import React from 'react'

const ImagesOverlay = ({img1, img2}) => {
  return (
    <div className='w-96 md:w-[25rem] p-6 md:p-0 md:mr-12 mr-0 mt-6'>
      <div className='w-full'>
        <img src={img1} alt="" className='w-4/5 border-8 border-[#d3ebe6]' />
      </div>
      <div className='w-full flex justify-end -translate-y-24'>
        <img src={img2} alt="" className='w-2/3 border-8 border-[#d3ebe6]' />
      </div>
    </div>
  )
}

export default ImagesOverlay