import React from 'react'
import Heading from './Heading'
import TravellersExperienceSwiper from './TravellersExperienceSwiper'
import SwiperMobileBtn from './SwiperMobileBtn'

const TravellersExperience = () => {
  return (
    <div className='px-4 sm:pr-12 md:pr-0  lg:px-[90px]  pb-[80px] md:pb-[100px] lg:pb-[140px]'>
        <Heading heading="Traveler's Experiences" description='Here are some awesome feedback from our travellers' buttons={false} />

        <TravellersExperienceSwiper />
        <SwiperMobileBtn mobileBtn={true}/>
    </div>
  )
}

export default TravellersExperience