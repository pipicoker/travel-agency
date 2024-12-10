"use client"
import React, { useEffect, useState } from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import { Navigation,  Scrollbar, A11y } from 'swiper/modules';


import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import TravellerData from "../lib/TravellerData";
import {Playfair_Display} from 'next/font/google'
import rating from '../../public/Rating.png'

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

              <div className=" -mb-12 pl-5 md:pl-10  ">
                <Image src={data.src} alt="pix" width={100} height={100} className="rounded-[100px]" />
              </div>

            <div className="bg-[#F5F6F7] rounded-xl px-5 pt-[60px] pb-[32px] md:px-10 md:pb-10">
              
              

              <div className="text-[#767E86] grid gap-4">
                <p className="text-lg">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness.</p>

                <Image src={rating} alt="pix" />

                <div>
                  <p className={`${playfair.className} text-2xl`}>{data.name}</p>
                  <p className="text-lg">{data.title}</p>
                </div>
              </div>
                
            </div>
                
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  )
}

export default TravellersExperienceSwiper