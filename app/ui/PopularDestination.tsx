"use client"
import React from 'react';
import PopularDestinationSwiper from './PopularDestinationSwiper'
import Heading from './Heading';
import SwiperMobileBtn from './SwiperMobileBtn';
import {motion} from "motion/react"

const PopularDestination = () => {
  
 
  return (
    <motion.div 
    initial={{ opacity: 0, y: 50 }} 
    whileInView={{ opacity: 1, y: 0 }} 
    transition={{ duration: 1,  }} 
    className='px-4 lg:px-[90px] py-[80px] md:py-[100px] lg:py-[140px]'>
      {/* <div>
        <h2 className={`${playfair.className} text-[54px] text-[#172432]    `}>Popular Destinations</h2>
          <div className='w-4/5 md:w-2/5 lg:w-1/4 border-b-[3px] border-[#FF7757]'></div>

          <div className='flex items-center justify-between'>
            <p className='mt-[32px] text-2xl text-[#767E86]'>Most popular destinations around the world, from historical places to natural wonders.</p>

            <div className='hidden md:flex gap-10'>
              <div className="custom-prev bg-[#172432] px-5 py-7">
                <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 1L1 11L11 21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              <div className="custom-next bg-[#FF7757] px-5 py-7">
                <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 21L11 11L0.999999 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            
          </div>
          
      </div> */}

      <Heading heading='Popular Destinations' description='Most popular destinations around the world, from historical places to natural wonders' buttons= {true}/>
        

        <PopularDestinationSwiper />

       <SwiperMobileBtn mobileBtn={true} />
    </motion.div>
  )
}

export default PopularDestination