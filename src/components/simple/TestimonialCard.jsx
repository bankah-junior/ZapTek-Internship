import React from 'react'

const TestimonialCard = ({img, name, occupation, quote}) => {
  return (
    <div>
      <div>
        <div className="avatar pt-2">
          <div className="w-24 rounded-full ring ring-[rgb(81,81,82,0.7)] ring-offset-base-300 ring-offset-2">
            <img src={img} alt='' />
          </div>
        </div>
      </div>
      <h2 className='font-bold text-white text-2xl my-2'>{name}</h2>
      <h3 className='font-medium text-xl mb-4 text-white opacity-90'>{occupation}</h3>
      <p className='text-xl text-white opacity-90'><i>" {quote} "</i></p>
    </div>
  )
}

export default TestimonialCard