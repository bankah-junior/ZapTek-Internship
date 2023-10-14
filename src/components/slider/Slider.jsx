'use client';

import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import testimonials1 from '../../assets/testimonials/testimonials-1.jpg'
import testimonials2 from '../../assets/testimonials/testimonials-2.jpg'
import testimonials3 from '../../assets/testimonials/testimonials-3.jpg'
import testimonials4 from '../../assets/testimonials/testimonials-4.jpg'
import testimonials5 from '../../assets/testimonials/testimonials-5.jpg'
import TestimonialCard from '../simple/TestimonialCard';

const Slider = () => {
  return (
        <Carousel infiniteLoop autoPlay>
          <TestimonialCard img={testimonials1} name={"Saul Goodman"} occupation={"Ceo & Founder"} quote={"Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper."} />
          <TestimonialCard img={testimonials2} name={"Sara WiLsson"} occupation={"Designer"} quote={"Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velitfore eram velit sunt aliqua nosterfugiat irure amet legam anim culpa."} />
          <TestimonialCard img={testimonials3} name={"Jena Karlis"} occupation={"Store Owner"} quote={"Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minintempor labore quem eram dui5 noster aute amet eramfore quis sint minim."} />
          <TestimonialCard img={testimonials4} name={"Matt Brandon"} occupation={"Freelancer"} quote={"Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim(ugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elitfore quem dolore labore illum veniam."} />
          <TestimonialCard img={testimonials5} name={"John Larson"} occupation={"Entrepreneur"} quote={"Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpafore nisi cillum quid."} />
        </Carousel>
  )
}

export default Slider