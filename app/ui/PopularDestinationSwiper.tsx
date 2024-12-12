"use client"
import React, { useEffect, useState } from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {motion} from 'motion/react'
import { Navigation,  Scrollbar, A11y } from 'swiper/modules';


import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import PopularDestinationData from '../lib/PopularDestinationSwiperData';
import {Playfair_Display} from 'next/font/google'

const playfair = Playfair_Display({
  weight: '400',
  subsets: ['latin']
})

const PopularDestinationSwiper = () => {
  const [slideWidth, setSlideWidth] = useState(300);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setSlideWidth(496); // Large screens
      else if (window.innerWidth >= 768) setSlideWidth(496); // Medium screens
      else if (window.innerWidth >= 640) 
        setSlideWidth(728); // Small screens
      
      else setSlideWidth(288); // Default for very small screens
    };

    handleResize(); // Set initial width
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <motion.div 
    initial={{ opacity: 0, x: 50 }} 
    whileInView={{ opacity: 1, x: 0 }} 
    transition={{ duration: 1, delay: 0.5 }} 
    className="mt-[100px]">
      
      <Swiper
        modules={[Navigation,  Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView="auto"
        // breakpoints={{
        //   // Adjust spacing for different screen sizes if needed
        //   320: { spaceBetween: 20 },
        //   768: { spaceBetween: 32 },
        //   1024: { spaceBetween: 32 },
        // }}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}        
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >

        {PopularDestinationData.map((data, index) => (
          <SwiperSlide key={index} 
          style={{ width: `${slideWidth}px`,  }}>
            <div className='relative w-full'>
              <Image 
              src={data.src} 
              alt='picture'
              
              className='w-[288px] h-[320px] sm:w-[728px] sm:h-[456px] md:w-[497px] md:h-[661px] rounded-2xl sm:rounded-[26px]'/>

              <div className='absolute inset-0 flex gap-[17px] flex-col  justify-end text-[#FFFFFF] pl-5 pb-10 md:pl-6 bg-black bg-opacity-50 rounded-2xl sm:rounded-[26px]'>
                <p className={`${playfair.className} text-[28px] font-medium`}>{data.name}</p>

                <div className="flex items-center gap-4">
                  <svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.5625 8.4375C0.5625 12.6054 3.74442 17.1274 6.55209 21.0351C7.2195 21.9634 7.85878 22.8526 8.41495 23.6869C8.54541 23.8826 8.76516 24 8.99995 24C9.23475 24 9.4545 23.8826 9.58495 23.6869C10.1411 22.8526 10.7804 21.9634 11.4478 21.0351C14.2556 17.1274 17.4375 12.6054 17.4375 8.4375C17.4375 3.78478 13.6527 0 9 0C4.34728 0 0.5625 3.78478 0.5625 8.4375ZM13.2188 8.4375C13.2188 10.7639 11.3264 12.6562 9 12.6562C6.67364 12.6562 4.78125 10.7639 4.78125 8.4375C4.78125 6.11114 6.67364 4.21875 9 4.21875C11.3264 4.21875 13.2188 6.11114 13.2188 8.4375Z" fill="white"/>
                  <path d="M9 11.25C10.5533 11.25 11.8125 9.9908 11.8125 8.4375C11.8125 6.8842 10.5533 5.625 9 5.625C7.4467 5.625 6.1875 6.8842 6.1875 8.4375C6.1875 9.9908 7.4467 11.25 9 11.25Z" fill="white"/>
                  </svg>

                  <p className='text-2xl'>{data.place}</p>
                </div>
                
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </motion.div>
  );
};

export default PopularDestinationSwiper;
