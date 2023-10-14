import React from 'react'
// import { Link } from 'react-router-dom'
import { CounterCard, Gallery, IconHeadText, IconText, IconTextCard, PCarousel, PageLoader, SectionTitle, Slider, TeamCard } from '../../components'
import './home.css'
import { FaDatabase } from 'react-icons/fa'
import { AiOutlineShop } from 'react-icons/ai'
import { BsClipboardData, BsShield, BsPhone, BsClock, BsAward } from "react-icons/bs";
import { MdDateRange, MdPhotoLibrary, MdOutlineSpeed } from "react-icons/md";
import { RiPaintBrushLine, RiEarthFill } from "react-icons/ri";
import { HiOutlineNewspaper } from "react-icons/hi";
import { FiBox, FiFileText } from "react-icons/fi";
import { BiBasketball, BiMap } from "react-icons/bi";
import { LuMonitorPlay } from "react-icons/lu";
import { LiaWarehouseSolid } from "react-icons/lia";
import { TfiEmail } from "react-icons/tfi";
import { CiFaceSmile } from "react-icons/ci"
import { SiRobotframework } from "react-icons/si";
import aboutImg from '../../assets/about.jpg'
import servicesImg from '../../assets/features.jpg'
import countImg from '../../assets/counts-img.jpg'
import teamImg1 from '../../assets/team/team-1.jpg'
import teamImg2 from '../../assets/team/team-2.jpg'
import teamImg3 from '../../assets/team/team-3.jpg'
import teamImg4 from '../../assets/team/team-4.jpg'

const Home = () => {
  return (
    <div className='relative'>
        {/* <Link to={`/profile-details/projectInfo`}>Details</Link> */}
        <PageLoader />
        <div className=''>
          {/* Home Section */}
          <div className='home-container w-full h-full'>
            <div className="home-container__cover pt-[91px] px-[15px] lg:px-[140px] w-full h-full bg-[rgba(0,0,0,0.5)]">
              <section className="w-full lg:h-screen text-white flex flex-col justify-center items-center" id='home'>
                <h1 className='capitalize text-3xl lg:text-6xl font-bold text-center md:hidden lg:block space-y-3' data-aos="fade-up" data-aos-duration="1500">
                  <p>Powerful Digital</p>
                  <p>Solution With Gp<span className='text-[#ffc451]'>.</span></p>
                </h1>
                <h1 className='capitalize text-3xl lg:text-6xl font-bold text-center hidden md:block lg:hidden' data-aos="fade-up" data-aos-duration="1500">
                  Powerful Digital Solution With Gp<span className='text-[#ffc451]'>.</span>
                </h1>
                <p className='text-center text-lg md:text-2xl mt-2 w-3/4 md:w-full' data-aos="fade-up" data-aos-duration="1500">We are team of talented digital marketers</p>
                <div className="flex md:flex-wrap md:flex-row flex-col justify-between w-full space-y-5 md:space-y-0 my-12 md:mt-16 md:mb-24" data-aos="zoom-in" data-aos-duration="1500">
                  <IconText icon={<AiOutlineShop className='text-[#ffc451]' size={40} />} text={"Lorem Ipsum"} />
                  <IconText icon={<BsClipboardData className='text-[#ffc451]' size={35} />} text={"Dolor Sitema"} />
                  <IconText icon={<MdDateRange className='text-[#ffc451]' size={35} />} text={"Sedare Perspiciatis"} />
                  <IconText icon={<RiPaintBrushLine className='text-[#ffc451]' size={35} />} text={"Magni Dolores"} />
                  <IconText icon={<FaDatabase className='text-[#ffc451]' size={25} />} text={"Nemos Enimade"} />
                </div>
              </section>
            </div>
          </div>
          {/* End of Home Section */}

          {/* About Section */}
          <div className="about-container pt-[91px] px-[15px] lg:px-[140px]" id='about'>
            <div className='flex flex-col-reverse lg:flex-row'>
              <div className='space-y-3'  data-aos="fade-right" data-aos-duration="1500">
                <h1 className='text-[#444444] text-3xl font-bold'>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h1>
                <p><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</i></p>
                <ul className='pl-2 space-y-2'>
                  <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                  <li>Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                  <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                </ul>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
                </p>
              </div>
              <div className='mb-4 lg:mb-0'  data-aos="fade-left" data-aos-duration="1500">
                <img src={aboutImg} alt="" />
              </div>
            </div><br /><br /><br className='hidden lg:block' /><br className='hidden lg:block' />
            <div className='my-6'  data-aos="zoom-in" data-aos-duration="1500">
              <PCarousel />
            </div>
            <br /><br /><br /><br />
            <div className="flex flex-col lg:flex-row">
              <div className='lg:w-1/2 mb-4 lg:mb-0' data-aos="fade-right" data-aos-duration="1500">
                <img src={servicesImg} alt="" className='lg:w-[825px]' />
              </div>
              <div className="space-y-10 m-6 lg:mt-0">
                <IconHeadText icon={<HiOutlineNewspaper size={35} color='#ffc451' />} heading={"Est labore ad"} text={"Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip"} animeName={"zoom-in-left"} animeDuration={1500} animeDelay={0} />
                <IconHeadText icon={<FiBox size={35} color='#ffc451' />} heading={"Harum esse qui"} text={"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt"} animeName={"zoom-in-left"} animeDuration={1500} animeDelay={0} />
                <IconHeadText icon={<MdPhotoLibrary size={35} color='#ffc451' />} heading={"Aut occaecati"} text={"Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere"} animeName={"zoom-in-left"} animeDuration={1500} animeDelay={0} />
                <IconHeadText icon={<BsShield size={35} color='#ffc451' />} heading={"Beatae veritatis"} text={"Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta"} animeName={"zoom-in-left"} animeDuration={1500} animeDelay={0} />
              </div>
            </div>
          </div>
          {/* End of About Section */}

          {/* Services Section */}
          <div className="services-container pt-[91px] px-[15px] lg:px-[140px]" id='services'>
            <SectionTitle mainHead={"CHECK OUR SERVICES"} subHead={"SERVICES"} animeName={"fade-up"} animeDuration={1500} />
            <div className="flex flex-col lg:flex-row justify-between mt-14">
              <div className="flex flex-col md:flex-row lg:flex-col justify-between">
                <IconTextCard icon={<BiBasketball size={30} color='#000' />} heading={"Lorem Ipsum"} text={"Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"} animeName={"zoom-in"} animeDuration={1500} animeDelay={100}  /><br />
                <IconTextCard icon={<RiEarthFill size={30} color='#000' />} heading={"Nemo Enim"} text={"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis"} animeName={"zoom-in"} animeDuration={1500} animeDelay={100}  />
              </div><br />
              <div className="flex flex-col md:flex-row lg:flex-col justify-between">
                <IconTextCard icon={<FiFileText size={30} color='#000' />} heading={"Sed ut perspiciatis"} text={"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"} animeName={"zoom-in"} animeDuration={1500} animeDelay={100}  /><br />
                <IconTextCard icon={<LuMonitorPlay size={30} color='#000' />} heading={"Dele cardo"} text={"Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur"} animeName={"zoom-in"} animeDuration={1500} animeDelay={100}  />
              </div><br />
              <div className="flex flex-col md:flex-row lg:flex-col justify-between">
                <IconTextCard icon={<MdOutlineSpeed size={30} color='#000' />} heading={"Magni Dolores"} text={"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia"} animeName={"zoom-in"} animeDuration={1500} animeDelay={100}  /><br />
                <IconTextCard icon={<LiaWarehouseSolid size={30} color='#000' />} heading={"Divera don"} text={"Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur"} animeName={"zoom-in"} animeDuration={1500} animeDelay={100}  />
              </div>
            </div>
          </div>
          {/* End of Services Section */}

          {/* CTA Section */}
          <div className="cta-container mt-[91px]">
            <div className="w-full h-full bg-[rgba(0,0,0,0.6)] px-[15px] lg:px-[140px] py-[72px]">
              <div className="flex flex-col justify-center items-center space-y-5 text-white" data-aos="zoom-in" data-aos-duration="1500">
                <h2 className="capitalize font-bold text-3xl">Call To Action</h2>
                <p className='text-center'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div>
                  <button className='uppercase w-[143px] h-[42px] font-bold rounded-md border-2 border-white hover:border-[#ffc451] hover:bg-[#ffc451] hover:text-[#4d4a3f]'>Get started</button>
                </div>
              </div>
            </div>
          </div>
          {/* End of CTA Section */}

          {/* Portfolio Section */}
          <div className="portfolio-container pt-[91px] px-[15px] lg:px-[140px]" id='portfolio'>
            <SectionTitle mainHead={"CHECK OUR PORTFOLIO"} subHead={"PORTFOLIO"} animeName={"fade-up"} animeDuration={1500} />
            <div className='mb-8'>
              <Gallery />
            </div>
            <div className="flex flex-col lg:flex-row mt-20">
              <div className='lg:w-1/2' data-aos="zoom-in-right" data-aos-duration="1500">
                <img src={countImg} alt="" className='w-full' />
              </div>
              <div className='lg:w-1/2 p-4' data-aos="zoom-in-left" data-aos-duration="1500">
                <h2 className='font-bold md:text-4xl text-3xl text-[#151515] mb-3'>Voluptatem dignissimos provident quasi</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit</p>
                <div className="space-y-4 mt-8">
                  <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                    <CounterCard icon={<CiFaceSmile size={40} color='#ffc451' />} number={65} head={"Happy Clients"} text={" consequuntur voluptas nostrum aliquid ipsam architecto ut."} />
                    <CounterCard icon={<SiRobotframework size={40} color='#ffc451' />} number={85} head={"Projects"} text={" adipisci atque cum quia aspernatur totam laudantium et quia dere tan"} />
                  </div>
                  <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                    <CounterCard icon={<BsClock size={40} color='#ffc451' />} number={35} head={"Years of experience"} text={" aut commodi quaerat modi aliquam nam ducimus aut voluptate non vel"} />
                    <CounterCard icon={<BsAward size={40} color='#ffc451' />} number={20} head={"Awards"} text={" rerum asperiores dolor alias quo reprehenderit eum et nemo pad der"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End of Portfolio Section */}

          {/* Testimonial Section */}
          <div className="testimonial-container mt-[91px]">
            <div className="w-full h-full bg-[rgba(0,0,0,0.6)] px-[15px] lg:px-[140px] py-[72px]">
              <div  data-aos="zoom-in" data-aos-duration="1500">
                <Slider />
              </div>
            </div>
          </div>
          {/* End of Testimonial Section */}

          {/* Team Section */}
          <div className="team-container pt-[91px] px-[15px] lg:px-[140px]" id='team'>
            <SectionTitle mainHead={"CHECK OUR TEAM"} subHead={"TEAM"} animeName={"fade-up"} animeDuration={1500} />
            <div className="flex flex-col lg:flex-row">
              <div className="flex flex-col md:flex-row md:space-x-2 space-y-8 md:space-y-0 mb-8 w-full md:w-1/2 md:mr-2">
                <TeamCard img={teamImg1} name={"Walter White"} post={"Chief Executive Officer"} animeName={"fade-up"} animeDuration={1500} animeDelay={100}/>
                <TeamCard img={teamImg2} name={"Sarah Jhonson"} post={"Product Manager"} animeName={"fade-up"} animeDuration={1500} animeDelay={200}/>
              </div>
              <div className="flex flex-col md:flex-row md:space-x-2 space-y-8 md:space-y-0 mb-8 w-full md:w-1/2">
                <TeamCard img={teamImg3} name={"William Anderson"} post={"CTO"} animeName={"fade-up"} animeDuration={1500} animeDelay={300}/>
                <TeamCard img={teamImg4} name={"Amanda Jepson"} post={"Accountant"} animeName={"fade-up"} animeDuration={1500} animeDelay={400}/>
              </div>
            </div>
          </div>
          {/* End of Team Section */}

          {/* Contact Section */}
          <div className="contact-container pt-[91px] px-[15px] lg:px-[140px]" id='contact'>
            <SectionTitle mainHead={"CONTACT US"} subHead={"CONTACT"} animeName={"fade-up"} animeDuration={1500} />
            <div className='mb-10'>
              <iframe style={{border:"0", width: "100%", height: "270px"}} title='Map' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe>
            </div>
            <div className="flex flex-col lg:flex-row mb-10">
              <div className="space-y-10 my-6 lg:mt-0 md:w-1/2">
                <IconHeadText icon={<BiMap size={35} color='#ffc451' />} heading={"Location:"} text={"A108 Adam Street, New York, NY 535022"} />
                <IconHeadText icon={<TfiEmail size={35} color='#ffc451' />} heading={"Email:"} text={"info@example.com"} />
                <IconHeadText icon={<BsPhone size={35} color='#ffc451' />} heading={"Call:"} text={"+1 5589 55488 55s"} />
              </div>
              <div className='md:w-1/2 space-y-6'>
                <div className='flex flex-col md:flex-row md:space-x-4 space-y-6 md:space-y-0 w-full'>
                  <input type="text" name="name" id="name" placeholder='Your Name' className='rounded-md border-[1px] border-gray-400 w-full md:w-1/2' />
                  <input type="email" name="email" id="email" placeholder='Your Email' className='rounded-md border-[1px] border-gray-400 w-full md:w-1/2' />
                </div>
                <div>
                  <input type="text" name="subject" id="subject" placeholder='Subject' className='rounded-md border-[1px] border-gray-400 w-full' />
                </div>
                <div>
                  <textarea name="message" id="message" cols="30" rows="5" className='rounded-md border-[1px] border-gray-400 w-full' placeholder='Message'></textarea>
                </div>
                <div className="w-full grid place-content-center">
                  <button className='bg-[#ffc451] hover:bg-[rgba(255,196,81,0.9)] px-4 py-2 rounded-r-md text-[rgba(0,0,0,0.8)] font-semibold'>Send Message</button>
                </div>
              </div>
            </div>
          </div>
          {/* End of Contact Section */}
        </div>
    </div>
  )
}

export default Home