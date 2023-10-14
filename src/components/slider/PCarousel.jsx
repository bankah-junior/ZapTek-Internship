import React from 'react'
import client1 from '../../assets/clients/client-1.png'
import client2 from '../../assets/clients/client-2.png'
import client3 from '../../assets/clients/client-3.png'
import client4 from '../../assets/clients/client-4.png'
import client5 from '../../assets/clients/client-5.png'
import client6 from '../../assets/clients/client-6.png'
import client7 from '../../assets/clients/client-7.png'
import client8 from '../../assets/clients/client-8.png'
import { Carousel } from 'react-responsive-carousel'

const PCarousel = () => {
  return (
    <div>
        <Carousel autoPlay infiniteLoop>
            <div className="w-full">
            <div className='w-10 md:w-[7rem] flex justify-between space-x-6 md:space-x-20 my-10'>
                <img src={client1} alt='' className='w-[20%]'/>
                <img src={client2} alt='' className='w-[20%]'/>
                <img src={client3} alt='' className='w-[20%]'/>
                <img src={client4} alt='' className='w-[20%]'/>
                <img src={client5} alt='' className='w-[20%]'/>
                <img src={client6} alt='' className='w-[20%]'/>
            </div>
            </div>
            <div className="w-full">
                <div className='w-10 md:w-[7rem] flex justify-between space-x-6 md:space-x-20 my-10'>
                    <img src={client7} alt='' className='w-[20%]'/>
                    <img src={client8} alt='' className='w-[20%]'/>
                    <img src={client1} alt='' className='w-[20%]'/>
                    <img src={client2} alt='' className='w-[20%]'/>
                    <img src={client3} alt='' className='w-[20%]'/>
                    <img src={client4} alt='' className='w-[20%]'/>
                </div>
            </div>
            <div className="w-full">
                <div className='w-10 md:w-[7rem] flex justify-between space-x-6 md:space-x-20 my-10'>
                    <img src={client5} alt='' className='w-[20%]'/>
                    <img src={client6} alt='' className='w-[20%]'/>
                    <img src={client7} alt='' className='w-[20%]'/>
                    <img src={client8} alt='' className='w-[20%]'/>
                    <img src={client1} alt='' className='w-[20%]'/>
                    <img src={client2} alt='' className='w-[20%]'/>
                </div>
            </div>
            <div className="w-full">
                <div className='w-10 md:w-[7rem] flex justify-between space-x-6 md:space-x-20 my-10'>
                    <img src={client3} alt='' className='w-[20%]'/>
                    <img src={client4} alt='' className='w-[20%]'/>
                    <img src={client5} alt='' className='w-[20%]'/>
                    <img src={client6} alt='' className='w-[20%]'/>
                    <img src={client7} alt='' className='w-[20%]'/>
                    <img src={client8} alt='' className='w-[20%]'/>
                </div>
            </div>
            <div className="w-full">
                <div className='w-10 md:w-[7rem] flex justify-between space-x-6 md:space-x-20 my-10'>
                    <img src={client1} alt='' className='w-[20%]'/>
                    <img src={client2} alt='' className='w-[20%]'/>
                    <img src={client3} alt='' className='w-[20%]'/>
                    <img src={client4} alt='' className='w-[20%]'/>
                    <img src={client5} alt='' className='w-[20%]'/>
                    <img src={client6} alt='' className='w-[20%]'/>
                </div>
            </div>
            <div className="w-full">
                <div className='w-10 md:w-[7rem] flex justify-between space-x-6 md:space-x-20 my-10'>
                    <img src={client7} alt='' className='w-[20%]'/>
                    <img src={client8} alt='' className='w-[20%]'/>
                    <img src={client1} alt='' className='w-[20%]'/>
                    <img src={client2} alt='' className='w-[20%]'/>
                    <img src={client3} alt='' className='w-[20%]'/>
                    <img src={client4} alt='' className='w-[20%]'/>
                </div>
            </div>
            <div className="w-full">
                <div className='w-10 md:w-[7rem] flex justify-between space-x-6 md:space-x-20 my-10'>
                    <img src={client5} alt='' className='w-[20%]'/>
                    <img src={client6} alt='' className='w-[20%]'/>
                    <img src={client7} alt='' className='w-[20%]'/>
                    <img src={client8} alt='' className='w-[20%]'/>
                    <img src={client1} alt='' className='w-[20%]'/>
                    <img src={client2} alt='' className='w-[20%]'/>
                </div>
            </div>
            <div className="w-full">
                <div className='w-10 md:w-[7rem] flex justify-between space-x-6 md:space-x-20 my-10'>
                    <img src={client3} alt='' className='w-[20%]'/>
                    <img src={client4} alt='' className='w-[20%]'/>
                    <img src={client5} alt='' className='w-[20%]'/>
                    <img src={client6} alt='' className='w-[20%]'/>
                    <img src={client7} alt='' className='w-[20%]'/>
                    <img src={client8} alt='' className='w-[20%]'/>
                </div>
            </div>
        </Carousel>
    </div>
  )
}

export default PCarousel