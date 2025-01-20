"use client"
import React from 'react';
import {Playfair_Display} from 'next/font/google'
import SpecialOfferSwiper from './SpecialOfferSwiper';
import SwiperMobileBtn from './SwiperMobileBtn';
import {motion} from 'motion/react'

const playfair = Playfair_Display({
    weight: '400',
    subsets: ['latin']
})

const SpecialOffer = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 50 }} 
    whileInView={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.5,  }} viewport={{ once: true }}
    id='special'
    className='px-4 lg:px-[90px]  pb-[80px] md:pb-[100px] lg:pb-[140px]'>
        <div>
            <div className='grid sm:justify-end'>
                <h2 className={`${playfair.className} text-[54px] text-[#172432] `}>Special Offers</h2>
                <div className='w-4/5 md:w-2/5 lg:w-3/4 border-b-[3px] border-[#FF7757] sm:ml-auto'></div>
            </div>
            

            <div className='flex items-center justify-between'>

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

            <p className='mt-[32px] text-2xl text-[#767E86]'>Check out our special offers and discount.</p>
            
            </div>
            
        </div>

    
      

      <SpecialOfferSwiper />

      <SwiperMobileBtn mobileBtn={true} />
  </motion.div>
  )
}

export default SpecialOffer