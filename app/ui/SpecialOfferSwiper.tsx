"use client"
import React from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import rating from '../../public/Rating.png'
import {motion} from 'motion/react'

import { Navigation,  Scrollbar, A11y } from 'swiper/modules';


import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import SpecialOfferData from '../lib/SpecialOffer';
import {Mulish} from 'next/font/google'

const mulish = Mulish({
  weight: '400',
  subsets: ['latin']
})

const SpecialOfferSwiper = () => {
//     const [slideWidth, setSlideWidth] = useState(300);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 1024) setSlideWidth(496); // Large screens
//       else if (window.innerWidth >= 768) setSlideWidth(496); // Medium screens
//       else if (window.innerWidth >= 640) 
//         setSlideWidth(728); // Small screens
      
//       else setSlideWidth(288); // Default for very small screens
//     };

//     handleResize(); // Set initial width
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

  return (
    <motion.div 
    initial={{ opacity: 0, x: 50 }} 
    whileInView={{ opacity: 1, x: 0 }} 
    transition={{ duration: 1, delay: 0.5 }}
    className="mt-[100px]">
      
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

        {SpecialOfferData.map((data, index) => (
          <SwiperSlide key={index} 
          >
            <div className=''>
              <Image 
              src={data.src} 
              alt='picture'
              className='w-full h-[286px]  sm:h-[286px] rounded-t-[26px]'/>

              <div className="p-5 bg-[#FFF8F1] rounded-b-[26px]">
                <i className={`${mulish.className} text-[28px] text-[#767E86]`}>{data.place}</i>

                <div className="pt-2">
                    <Image src={rating} alt="rating picture" />
                </div>

                <p className="text-[#172432] pt-6">{data.description}</p>

                <div className="pt-6 gap-5 grid sm:flex sm:justify-between sm:items-center">
                    <p className="text-lg text-[#767E86] flex items-center gap-2">From <span className="text-[#FF7757] text-[32px]">${data.price}</span></p>

                    <button className="bg-[#FF7654] px-6 py-4 w-[127px] text-[#FFFFFF] text-xl rounded-xl">DETAILS</button>
                </div>
              </div>

              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </motion.div>
  )
}

export default SpecialOfferSwiper