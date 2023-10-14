import React, { useState } from 'react'
import './gallery.css'
import { Link } from 'react-router-dom'
import { BiPlusMedical, BiLink } from 'react-icons/bi'

const GalleryCard = ({id, img, title, category, outerCSS = " w-[20vw] h-[40vh]", innerCSS = " w-28 h-28"}) => {
    const [modal, setModal] = useState(false)

  return (
    <>
        <div className={`gallery-card scale-in-center overflow-hidden relative ${outerCSS}`}>
            <img src={img} alt="" className='w-full absolute top-0 left-0' />
            <div className="gallery-card-cover hidden absolute w-full h-full bg-[rgba(0,0,0,0.6)]"> {/* Add hidden after  */}
                <div className={`absolute bottom-0 left-0 text-white p-2 ${innerCSS}`}>
                    <h2 className='text-2xl font-bold'>{title}</h2>
                    <h3 className='text-lg font-semibold italic'>{category}</h3>
                    <div className="flex flex-row items-center space-x-8 mt-2">
                        <button className='font-bold text-lg' onClick={() => setModal(true)}><BiPlusMedical /></button>
                        <Link to={`/profile-details/${id}`}><BiLink size={25} /></Link>
                    </div>
                </div>
            </div>
        </div>
        {modal && (
            <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.9)] z-[9999] flex justify-center items-center">
                <div className="h-[50%] lg:h-full w-full lg:w-[75%] scale-in-center">
                    <img src={img} alt="" className='w-full h-full'/>
                </div>
                <button className='fixed top-0 right-0 p-4 font-bold text-4xl z-[99999] text-white' onClick={() => setModal(false)}>&times;</button>
            </div>
        )}
    </>
  )
}

export default GalleryCard