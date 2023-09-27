import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { AvatarCard } from '../../components/index';
import avatar1 from '../../assets/avatar1.jpg';
import avatar2 from '../../assets/avatar2.jpg';
import avatar3 from '../../assets/avatar3.jpg';

const Testimonial = () => {
  return (
    <div className="py-12 flex items-center justify-center ">
      <div className="w-4/5 md:w-2/3">
        <h5 className="text-[#219d80]">Testimonial</h5>
        <div className="w-full flex justify-between items-center">
          <h3 className="font-bold text-xl md:text-3xl">What People Say About Us</h3>
          <div className="md:w-12 md:h-12 p-1 rounded-tr-3xl bg-[#219d80] grid place-content-center">
            <AiOutlineArrowRight size={30} color='#fff' className='-rotate-45' />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between my-4">
          <AvatarCard title={"Kindness"} word={""} name={"John Doe"} post={"Senior Gardener Farmer"} img={avatar1} />
          <AvatarCard title={"Humility"} word={""} name={"Jack Harry"} post={"Senior Gardener Farmer"} img={avatar2} />
          <AvatarCard title={"Ethics & Morality"} word={""} name={"Sakib Hossain"} post={"Senior Gardener Farmer"} img={avatar3} />
        </div>
      </div>
    </div>
  )
}

export default Testimonial