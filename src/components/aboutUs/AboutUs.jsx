import React from 'react';
import { Progress } from "flowbite-react";
import { ImageTextOverlay, ImagesOverlay, IconCard } from '../index';
import missionIcon from '../../assets/mission-icon.jpg';
import vissionIcon from '../../assets/vission-icon.jpg';
import overImg1 from '../../assets/overlay1.png';
import overImg2 from '../../assets/overlay2.jpg';
import overImg3 from '../../assets/overlay3.jpg';

const AboutUs = () => {
  return (
    <div className='py-12 flex items-center justify-center' id='about-us'>
      <div className="md:w-2/3 flex flex-col">
        <div className="flex flex-col-reverse md:flex-row items-center ">
          <div className="w-full grid place-content-center md:w-1/2">
            <ImagesOverlay img1={overImg1} img2={overImg2} />
          </div>
          <div className='px-8 w-full md:w-1/2'>
            <h5 className="md:tet-xl font-semibold capitalize">About Us</h5>
            <h3 className="text-2xl md:text-4xl font-bold capitalize font-serif my-4">Your Support Is Really <br /> Powerful.</h3>
            <p className='mb-8'>
              The Secret To Happiness Lies In Helping Others. Never <br />
              Underestimate The Difference YOU Can Make In The <br />
              Lives Of The Poor, The Abused And The Helpless.
            </p>
            <button type="submit" className='md:px-4 md:py-2 p-2 text-white bg-[#219d80] hover:opacity-70'>Read More</button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <div className='w-4/5 md:w-1/2'>
            <h5 className="md:tet-xl font-semibold capitalize">Welcome To Charity</h5>
            <h3 className="text-2xl md:text-4xl font-bold capitalize font-serif my-4">
              Let Us Come Together <br /> To Make A Difference  
            </h3>
            <p className="mb-8">
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam <br />
              Nonumy Tempor Invidunt Ut Labore Et Dolore Magna Aliquyarn <br />
              Erat, Sed Diam Voluptua. At Vero Eos Et Accusam Et Justo. 
            </p>
            <div className="w-full flex flex-row justify-between md:justify-start items-center mb-8">
              <IconCard icon={missionIcon} title={"Our Mission"} text={"Lorem Ipsum Dolor Sit Amet,Consetetur Sadipgcing Elitrt Sed Diam"} />
              <IconCard icon={vissionIcon} title={"Our Vission"} text={"Lorem Ipsum Dolor Sit Amet,Consetetur Sadipgcing Elitrt Sed Diam"} />
            </div>
            <div>
              <div className="flex flex-row justify-between">
                <h5 className="md:text-xl font-semibold capitalize">Donations</h5>
                <h5 className="md:text-xl font-semibold capitalize">75%</h5>
              </div>
              <Progress progress={75} />
            </div>
          </div>
          <div className="w-full grid place-content-center md:w-1/2">
            <ImageTextOverlay img1={overImg3} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs