import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { projectInfo } from './detailsDB'
// import { webDB, appDB, cardDB } from '../../components/gallery/galleryDB'
import { DCarousel, PageLoader } from '../../components';

const ProfileDetails = () => {
    var { id } = useParams();

    switch (id) {
        case "projectInfo":
            id = projectInfo
            break;
        // case "web1":
        //     id = webDB
        //     break;
        default:
            break;
    }

    return (
    <div className='relative'>
        <PageLoader />
        <div className='pt-[91px] pb-16'>
            <div className=''>
                {/* Breadcrumb */}
                <div className="flex flex-col lg:flex-row justify-between space-y-4 lg:space-y-0 py-4 bg-[#f5f5f5] mb-8 px-[15px] lg:px-[140px]">
                    <h2 className='text-3xl'>Portfolio Details</h2>
                    <ul className='flex space-x-2'>
                        <li className='mr-2 text-[#ffc451]'><Link>Home</Link></li> /
                        <li><Link>Portfolio Details</Link></li>
                    </ul>
                </div>
                {/* End of Breadcrumb */}

                {/* Details Section */}
                <div className='px-[15px] lg:px-[140px] flex flex-col lg:flex-row lg:space-x-8'>
                    <div className="w-full lg:w-2/3">
                        <DCarousel />
                    </div>
                    <div className="w-full lg:w-1/3 mt-8 lg:mt-0">
                        <div className="card p-12 w-full shadow-xl">
                            <h2 className='mb-4 text-xl font-bold'>{id.heading}</h2> <hr />
                            <ul className="space-y-2 mt-4 text-sm">
                                <li><b>Category:</b> {id.category}</li>
                                <li><b>Client:</b> {id.client}</li>
                                <li><b>Project date:</b> {id.date}</li>
                                <li><b>Project URL:</b> <Link className='text-[#ffc451]'>{id.url}</Link></li>
                            </ul>
                        </div>
                        <div className='mt-8 space-y-4'>
                            <h2 className='text-3xl font-bold'>{id.aboutTitle}</h2>
                            <p>{id.aboutText}</p>
                        </div>
                    </div>
                </div>
                {/* End of Details Section */}
            </div>
        </div>
    </div>
  )
}

export default ProfileDetails