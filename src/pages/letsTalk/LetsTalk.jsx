import React from 'react'
import fitsightBrandLogo from '../../assets/Sin título-1 4.png'

const LetsTalk = () => {
  return (
    <div className='letsTalk__container w-full h-full md:h-screen'>
      <div className="letsTalk__container-cover w-full h-full">
        <div className="letsTalk__container-main w-full h-full flex flex-col md:flex-row items-center justify-between pt-24">
          <div className="md:w-100-70 flex justify-center items-center" >
            <img src={fitsightBrandLogo} alt="" className='' />
          </div>
          <div className="md:w-100-50 flex flex-col justify-center items-center" >
            <h2 className="uppercase font-bold text-3xl md:text-6xl text-yellow-600 text-center">Let's talk!</h2>
            <form className='flex flex-col my-12 p-2 md:w-100-40'>
              <input type="text" name="name" id="name" placeholder='YOUR NAME' className='p-2 mb-4 text-white' />
              <input type="email" name="email" id="email" placeholder='YOUR EMAIL' className='p-2 mb-4 text-white' />
              <textarea name="message" id="message" cols="30" rows="4" placeholder='TELL US EVERYTHING' className='p-2 mb-4 text-white'></textarea>
              <button type="submit" className='text-white text-xl mt-4 border-2 border-white rounded-lg py-2'>Send</button>
            </form>
            <footer className='mb-8'>
              <center>
                <a href="mailto:hola@fitsight.com" className="uppercase text-white block">HOLA@FITSIGHT.COM</a>
                <a href="tel:+34123456987" className="uppercase text-white block">+34 123 456 987</a>
              </center>
            </footer>
          </div>
          <div className="md:w-100-80 hidden md:block" >            
          </div>
        </div>
      </div>
    </div>
  )
}

export default LetsTalk