"use client"
import React from "react";
import Image from 'next/image';
import {motion} from 'motion/react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation,  Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import gallery1 from "../../public/gallery-1.jpg"
import gallery2 from "../../public/gallery-2.jpg"
import gallery3 from "../../public/gallery-3.jpg"
import gallery4 from "../../public/gallery-4.jpg"


const DestinationGallerySwipper = () => {
    const gallery = [gallery1, gallery2, gallery3, gallery4, gallery1, gallery2]
  return (
    <motion.div 
    initial={{ opacity: 0, y: 50 }} 
    whileInView={{ opacity: 1, y: 0 }}  
    transition={{ duration: 0.5,  delay: 0}}  viewport={{ once: true }}>
        <div className="mt-[100px]">
      
      <Swiper
        modules={[Navigation,  Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 }, // Tablet
            1024: { slidesPerView: 3, spaceBetween: 32 }, // laptop
            1536: { slidesPerView: 4, spaceBetween: 32 }, // desktop
          }}
        
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}        
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
      >

        {gallery.map((data, index) => (
          <SwiperSlide key={index} style={{ overflow: "hidden"   }}
          >
            <motion.div 
            whileHover={{ scale: 1.2, rotate: 3 }}
            className='relative '>
              <Image 
              src={data} 
              alt='picture'
              className={` w-full h-[320px] sm:h-[351px] md:h-[469px] lg:h-[570px] rounded-[26px] transition-transform duration-300 ease-in-out md:hover:-translate-y-24`} />

              

              
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
    </motion.div>
  )
}

export default DestinationGallerySwipper