"use client"
import React, { useEffect, useState, useMemo } from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import { Navigation,  Scrollbar, A11y } from 'swiper/modules';


import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import TravellerData from "../lib/TravellerData";
import {Playfair_Display} from 'next/font/google'

const playfair = Playfair_Display({
  weight: '400',
  subsets: ['latin']
})
const TravellersExperienceSwiper = () => {
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
    <div className="mt-[100px]">
      
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

        {TravellerData.map((data, index) => (
          <SwiperSlide key={index} 
          style={{ width: `${slideWidth}px`,  }}>
            <div>
                
            </div>
                
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  )
}

export default TravellersExperienceSwiper