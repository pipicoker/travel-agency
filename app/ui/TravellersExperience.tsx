import React from 'react'
import Heading from './Heading'
import TravellersExperienceSwiper from './TravellersExperienceSwiper'
import SwiperMobileBtn from './SwiperMobileBtn'
import {motion} from 'motion/react'

const TravellersExperience = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 50 }} 
    whileInView={{ opacity: 1, y: 0 }} 
    transition={{ duration: 1,  }}
    className='px-4 sm:pr-12 md:pr-0  lg:px-[90px]  pb-[80px] md:pb-[100px] lg:pb-[140px]'>
        <Heading heading="Traveler's Experiences" description='Here are some awesome feedback from our travellers' buttons={false} />

        <TravellersExperienceSwiper />
        <SwiperMobileBtn mobileBtn={true}/>
    </motion.div>
  )
}

export default TravellersExperience