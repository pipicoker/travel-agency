import React from 'react'
import Heading from './Heading'
import DestinationGallerySwipper from './DestinationGallerySwipper'
import SwiperMobileBtn from './SwiperMobileBtn'
import {motion} from 'motion/react'

const DestinationGallery = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 50 }} 
    whileInView={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.5,  }} viewport={{ once: true }}
    className='px-4 sm:pr-12 md:pr-0  lg:px-[90px]  pb-[80px] md:pb-[100px] lg:pb-[140px]'>
        <Heading heading='Destination Gallery' description='Our photo gallery on trip' buttons={true}/>

        <DestinationGallerySwipper />
        <SwiperMobileBtn mobileBtn={true} />
    </motion.div>
  )
}

export default DestinationGallery