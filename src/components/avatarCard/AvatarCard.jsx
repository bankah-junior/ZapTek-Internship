import React from 'react';
import quoteImg from '../../assets/quote.jpg';

const AvatarCard = ({title, words, name, post, img}) => {
  return (
    <div className='w-full md:w-1/4 my-4 border-2 border-[#219d80] p-2'>
      <img src={quoteImg} alt="" />
      <h4 className="text-lg font-medium my-1">{title}</h4>
      <p>{
        words = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora illum fugit tempore tenetur architecto? Laudantium."  
      }</p>
      <div className="flex items-center my-4">
        <div className='mr-2 w-12'>
          <img src={img} alt="" />
        </div>
        <div className="flex flex-col">
          <h4 className="text-lg font-medium my-1">{name}</h4>
          <p>{post}</p>
        </div>
      </div>
    </div>
  )
}

export default AvatarCard