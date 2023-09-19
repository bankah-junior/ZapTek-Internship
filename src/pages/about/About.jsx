import React from 'react'
import fitsightBrandLogo from '../../assets/Sin título-1 4.png'
import galleryImg1 from '../../assets/Screenshot 2022-03-05 at 12.21 2.png'
import galleryImg2 from '../../assets/Screenshot 2022-03-05 at 21.58 2.png'
import galleryImg3 from '../../assets/Screenshot 2022-03-05 at 21.36 1.png'

const About = () => {
  return (
    <div className='aboutPage__container overflow-hidden'>
      <section className="aboutPage__container-top_section w-full md:h-screen relative mt-24 md:mt-0">
        <div className='h-full flex flex-col justify-center py-4 px-12'>
          <h2 className="uppercase font-bold text-4xl md:text-6xl text-yellow-600 w-full text-center mb-6 md:mb-0">about us</h2>
          <h3 className="uppercase font-semibold text-2xl md:text-4xl text-white">Get your fitness <br /> brand to the digital <br /> world.</h3> <br /><br />
          <h3 className="uppercase font-semibold text-2xl md:text-4xl text-white">Together we create, <br /> we design, we fit.</h3>
        </div>
        <div className="absolute md:bottom-c7 md:mr-12" style={{bottom: ".5rem", right: "-7rem"}} >
          <img src={fitsightBrandLogo} alt="" className='w-100-40' />
        </div>
      </section>
      <section className="aboutPage__container-bottom_section w-full md:h-screen" style={{backgroundColor: "rgba(0,0,0,0.7)"}}>
        <h2 className="uppercase font-bold text-4xl md:text-6xl text-yellow-600 w-full mb-6 pt-6 text-center ml-6 md:mb-0">we are</h2>
        <div className="about__gallery flex flex-col md:flex-row justify-between p-8 md:mt-20">
          <div className="about__gallery-left relative flex justify-center items-center mb-24">
            <h3 className="uppercase text-2xl font-semibold text-white absolute left-0 md:top-c5" style={{top: "-2rem", lineHeight: "1.8rem"}}>
              Content creators and social <br /> media managers
            </h3>
            <img src={galleryImg1} alt="" />
            <h3 className="uppercase text-2xl font-semibold text-white absolute right-0 md:bottom-c5" style={{bottom: "-2rem", lineHeight: "1.8rem"}}>
              Wen and app designers <br /> and hosts.
            </h3>
          </div>
          <div className="about__gallery-right flex flex-col">
            <div className="top relative flex flex-col justify-center items-center mb-8">
              <img src={galleryImg2} alt="" />
              <div className="relative flex justify-center items-center" style={{bottom: "2rem"}}>
                <span className="uppercase text-right text-2xl font-semibold text-white">
                  Online ads and <br /> campaign creators
                </span>
              </div>
            </div>
            <div className="bottom relative flex flex-col justify-center items-center">
              <img src={galleryImg3} alt="" />
              <div className="relative flex justify-center items-center right-0 md:right-c11" style={{bottom: "2rem"}}>
                <span className="uppercase text-right text-2xl font-semibold text-white">
                  Expert in research <br /> and positioning
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About