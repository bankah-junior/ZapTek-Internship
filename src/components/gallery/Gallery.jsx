import React from 'react';
import gallery1 from '../../assets/gallery1.jpg';
import gallery2 from '../../assets/gallery2.jpg';
import gallery3 from '../../assets/gallery3.jpg';
import gallery4 from '../../assets/gallery4.jpg';
import gallery5 from '../../assets/gallery5.jpg';
import gallery6 from '../../assets/gallery6.jpg';
import gallery7 from '../../assets/gallery7.jpg';
import gallery8 from '../../assets/gallery8.jpg';

const Gallery = () => {
  return (
    <div className='w-full flex flex-col md:flex-row px-4' id='gallery'>
      <div className="w-full md:w-2/4 flex items-center mb-8">
        <div className="w-1/2 flex flex-col mr-4 md:mr-0 space-y-4">
          <div className="h-1/2 w-full flex justify-center items-center mb-2">
            <img src={gallery1} alt="" />
          </div>
          <div className="h-1/2 w-full flex justify-center items-center">
            <img src={gallery2} alt="" />
          </div>
        </div>
        <div className="w-1/2">
          <img src={gallery3} alt="" />
        </div>
      </div>
      <div className="w-full md:w-2/4 flex flex-row-reverse md:flex-row items-center">
        <div className="w-1/2 flex flex-col ml-4 md:ml-0 space-y-4  md:px-4">
          <div className="h-1/2 w-full flex justify-center items-center">
            <img src={gallery4} alt="" />
          </div>
          <div className="h-1/2 w-full flex justify-center items-center">
            <img src={gallery5} alt="" />
          </div>
        </div>
        <div className="w-1/2 ml-0 md:ml-4">
          <img src={gallery6} alt="" />
        </div>
      </div>
      <div className="w-full md:w-1/4 flex flex-row-reverse md:flex-row items-center">
        <div className="w-full flex flex-col-reverse md:flex-col ml-4 mt-4 md:mt-0 md:ml-0">
          <div className="h-1/2 w-full flex justify-center items-center md:px-4 mb-0 md:mb-4">
            <img src={gallery7} alt="" />
          </div>
          <div className="h-1/2 w-full flex justify-center items-center mb-4 md:mb-0">
            <img src={gallery8} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery