import React from 'react'

const CallToAction = () => {
  return (
    <div className='py-12 flex items-center justify-center bg-[#219d80]' id='how-we-help'>
      <div className="w-4/5 md:w-2/3 flex flex-col">
        <center className='text-white'>
          <h5 className='my-2'>Give Us A Hand</h5>
          <h2 className="text-xl md:text-4xl font-bold uppercase">
            Support us and change the course of a <br className='hidden md:block' /> child's life today!
          </h2>
          <button className='font-semibold text-[#219d80] bg-[#cdc5c5] my-8 px-8 py-2 rounded-full'>DONATE</button>
        </center>
      </div>
    </div>
  )
}

export default CallToAction