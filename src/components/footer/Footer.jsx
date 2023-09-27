import React from 'react'
import { Link } from 'react-router-dom';
import { FaYoutube, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='py-12 flex items-center justify-center bg-[#22262f]'>
      <div className="w-4/5 md:w-2/3 flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 mb-16 md:mb-0">
          <h4 className="text-white font-bold">Address</h4><br />
          <p className='text-[#afafaf]'>A-272, Surajmal Vihar, Delhi, <br /> <a href="tel:1100928181810860">11009281-8181-0860</a></p><br />
          <a href="mailto:contact@vivekguptafoundation.in" className='text-[#afafaf]'>Contact@Vivekguptafoundation.In</a>
        </div>
        <div className="w-full md:w-1/3 mb-16 md:mb-0">
          <h4 className="text-white font-bold font-serif">Get In Touch</h4><br />
          <Link className='text-[#afafaf]' to={'#contact-us'} >Contact Us</Link> <br /> <br />
          <Link className='text-[#afafaf]' to={'#our-services'} >Our Services</Link>
        </div>
        <div className="w-full md:w-1/3">
          <h4 className="text-white font-bold font-serif">Newsletter</h4><br />
          <form className=''>
            <input type="email" name="email" id="email" placeholder='Enter Your Email' />
            <button type="submit" className='md:px-4 md:py-2 p-2 text-white bg-[#219d80] hover:opacity-70'>Subscribe</button><br />
            <span className='text-[#afafaf] text-sm'>Your email is safe with us, we don't spam.</span>
          </form>

          <h4 className="text-white mt-16 font-bold font-serif">About Me</h4><br />
          <div className="social-icons flex space-x-8">
            <Link to={"#"}>
              <FaTwitter size={35} color='#22262f' className='bg-white rounded-full p-2' />
            </Link>
            <Link to={"#"}>
              <FaInstagram size={35} color='#22262f' className='bg-white rounded-full p-2' />
            </Link>
            <Link to={"#"}>
              <FaPinterest size={35} color='#22262f' className='bg-white rounded-full p-2' />
            </Link>
            <Link to={"#"}>
              <FaYoutube size={35} color='#22262f' className='bg-white rounded-full p-2' />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer