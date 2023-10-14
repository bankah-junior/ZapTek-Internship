import React, { useState } from 'react'
import app1 from '../../assets/portfolio/portfolio-1.jpg'
import app2 from '../../assets/portfolio/portfolio-3.jpg'
import app3 from '../../assets/portfolio/portfolio-6.jpg'
import card1 from '../../assets/portfolio/portfolio-4.jpg'
import card2 from '../../assets/portfolio/portfolio-7.jpg'
import card3 from '../../assets/portfolio/portfolio-8.jpg'
import web1 from '../../assets/portfolio/portfolio-2.jpg'
import web2 from '../../assets/portfolio/portfolio-5.jpg'
import web3 from '../../assets/portfolio/portfolio-9.jpg'
import { webDB, appDB, cardDB } from './galleryDB'
import { GalleryCard } from '../index'

const Gallery = () => {
    const [allTab, setAllTab] = useState(true)
    const [appsTab, setAppsTab] = useState(false)
    const [cardTab, setCardTab] = useState(false)
    const [webTab, setWebTab] = useState(false)

    const activeTab = "px-3 py-[4px] bg-[#ffc451] rounded-md font-semibold cursor-pointer"
    const nonActiveTab = "px-3 py-[4px] rounded-md font-semibold cursor-pointer"

    const handleAllTab = () => {
        setAllTab(true)
        setAppsTab(false)
        setCardTab(false)
        setWebTab(false)
    }
    const handleAppsTab = () => {
        setAllTab(false)
        setAppsTab(true)
        setCardTab(false)
        setWebTab(false)
    }
    const handleCardTab = () => {
        setAllTab(false)
        setAppsTab(false)
        setCardTab(true)
        setWebTab(false)
    }
    const handleWebTab = () => {
        setAllTab(false)
        setAppsTab(false)
        setCardTab(false)
        setWebTab(true)
    }

  return (
    <div>

        {/* Tabs Section */}
        <div className="tabs">
            <ul className='w-full flex flex-row justify-center items-center space-x-6'>
                <li>
                    <button className={!allTab ? nonActiveTab : activeTab} onClick={handleAllTab}>ALL</button>
                </li>
                <li>
                    <button className={!appsTab ? nonActiveTab : activeTab} onClick={handleAppsTab}>APPS</button>
                </li>
                <li>
                    <button className={!cardTab ? nonActiveTab : activeTab} onClick={handleCardTab}>CARD</button>
                </li>
                <li>
                    <button className={!webTab ? nonActiveTab : activeTab} onClick={handleWebTab}>WEB</button>
                </li>
            </ul>
        </div>
        {/* End of Tabs Section */}

        {/* Display Section */}
        <div className="mt-8">
            {/* All Gallery */}
            <div className={!allTab ? "hidden" : "block"}>
                <div className='flex flex-col md:flex-row justify-evenly items-center space-y-4 md:space-y-0 mb-4'>
                    <GalleryCard img={app1} title={appDB.app1.title} category={appDB.app1.category} id={"projectInfo"} outerCSS=' w-full md:w-[30%] h-[47vh]' />
                    <GalleryCard img={web1} title={webDB.web1.title} category={webDB.web1.category} id={"projectInfo"} outerCSS=' w-full md:w-[20vw] h-[26vh]' />
                    <GalleryCard img={app2} title={appDB.app2.title} category={appDB.app2.category} id={"projectInfo"} outerCSS=' w-full md:w-[30%] h-[30vh]' />
                </div>
                <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 mb-4'>
                    <GalleryCard img={app3} title={appDB.app3.title} category={appDB.app3.category} id={"projectInfo"} outerCSS=' w-full md:w-[30%] h-[68vh]' />
                    <GalleryCard img={web2} title={webDB.web2.title} category={webDB.web2.category} id={"projectInfo"} outerCSS=' w-full md:w-[30%] h-[68vh]' />
                    <GalleryCard img={card2} title={cardDB.card2.title} category={cardDB.card2.category} id={"projectInfo"} outerCSS=' w-full md:w-[30%] h-[30vh]' />
                </div>
                <div className='flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 mb-4'>
                    <GalleryCard img={card1} title={cardDB.card1.title} category={cardDB.card1.category} id={"projectInfo"} outerCSS=' w-full md:w-[30%] h-[30vh]' />
                    <GalleryCard img={web3} title={webDB.web3.title} category={webDB.web3.category} id={"projectInfo"} outerCSS=' w-full md:w-[30%] h-[26vh]' />
                    <GalleryCard img={card3} title={cardDB.card3.title} category={cardDB.card3.category} id={"projectInfo"} outerCSS=' w-full md:w-[30%] h-[30vh]' />
                </div>
            </div>
            {/* End of All Gallery */}

            {/* Apps Gallery */}
            <div className={!appsTab ? "hidden" : "block"}>
                <div className='flex md:flex-row flex-col justify-between space-y-6 md:space-y-0'>
                    <GalleryCard img={app1} title={appDB.app1.title} category={appDB.app1.category} id={"projectInfo"} outerCSS=' w-full md:w-[30%] h-[47vh]' />
                    <GalleryCard img={app2} title={appDB.app2.title} category={appDB.app2.category} id={"projectInfo"} outerCSS=' w-full md:w-[30%] h-[30vh]' />
                    <GalleryCard img={app3} title={appDB.app3.title} category={appDB.app3.category} id={"projectInfo"} outerCSS=' w-full md:w-[30%] h-[68vh]' />
                </div>
            </div>
            {/* End of Apps Gallery */}

            {/* Card Gallery */}
            <div className={!cardTab ? "hidden" : "block"}>
                <div className='flex md:flex-row flex-col justify-between space-y-6 md:space-y-0'>
                    <GalleryCard img={card1} title={cardDB.card1.title} category={cardDB.card1.category} id={"projectInfo"} outerCSS=' w-full md:w-[30%] h-[30vh]' />
                    <GalleryCard img={card2} title={cardDB.card2.title} category={cardDB.card2.category} id={"projectInfo"} outerCSS=' w-full md:w-[30%] h-[30vh]' />
                    <GalleryCard img={card3} title={cardDB.card3.title} category={cardDB.card3.category} id={"projectInfo"} outerCSS=' w-full md:w-[30%] h-[30vh]' />
                </div>
            </div>
            {/* End of Card Gallery */}

            {/* Web Gallery */}
            <div className={!webTab ? "hidden" : "block"}>
                <div className='flex md:flex-row flex-col justify-between space-y-6 md:space-y-0'>
                    <GalleryCard img={web1} title={webDB.web1.title} category={webDB.web1.category} id={"projectInfo"} outerCSS=' w-full md:w-[30%] h-[26vh]' />
                    <GalleryCard img={web2} title={webDB.web2.title} category={webDB.web2.category} id={"projectInfo"} outerCSS=' w-full md:w-[30%] h-[68vh]' />
                    <GalleryCard img={web3} title={webDB.web3.title} category={webDB.web3.category} id={"projectInfo"} outerCSS=' w-full md:w-[30%] h-[26vh]' />
                </div>
            </div>
            {/* End of Web Gallery */}
        </div>
        {/* End of Display Section */}
    </div>
  )
}

export default Gallery