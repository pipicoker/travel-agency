"use client"
import React from "react";
import Image from 'next/image';

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
    <div>
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
          <SwiperSlide key={index} 
          >
            <div className=''>
              <Image 
              src={data} 
              alt='picture'
              className={` w-full h-[320px] sm:h-[351px] md:h-[469px] lg:h-[570px] rounded-[26px]`}/>

              

              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
    </div>
  )
}

export default DestinationGallerySwipper