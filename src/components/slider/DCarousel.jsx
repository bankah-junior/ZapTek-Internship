'use client';

import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import app1 from '../../assets/portfolio/portfolio-1.jpg'
import app2 from '../../assets/portfolio/portfolio-3.jpg'
import web1 from '../../assets/portfolio/portfolio-2.jpg'

const DCarousel = () => {
  return (
    <Carousel infiniteLoop autoPlay>
        <img src={app1} alt="" />
        <img src={web1} alt="" />
        <img src={app2} alt="" />
    </Carousel>
  )
}

export default DCarousel