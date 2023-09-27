import React from 'react';
import { AboutUs, CallToAction, Gallery, Hero, Testimonial } from '../../components/index';

const Home = () => {
  return (
    <div className=''>
      <Hero />
      <AboutUs />
      <Gallery />
      <Testimonial />
      <CallToAction />
    </div>
  )
}

export default Home