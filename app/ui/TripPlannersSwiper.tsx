"use client";

import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import rating from "../../public/Rating.png";
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import TripPlannersData from "../lib/TripPlannersData";

const TripPlannersSwiper = () => {
  const [slideWidth, setSlideWidth] = useState(300);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setSlideWidth(496);
      else if (window.innerWidth >= 768) setSlideWidth(496);
      else if (window.innerWidth >= 640) setSlideWidth(728);
      else setSlideWidth(288);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="">
      <Swiper
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={32}
        slidesPerView="auto"
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {TripPlannersData.map((data, index) => (
          <SwiperSlide key={index} style={{ width: "300px"}}>
            <div className="relative h-[399px] rounded-[26px] group overflow-hidden">
              {/* Image */}
              <div className="absolute top-0 left-0 w-full h-[399px] transition-transform duration-300 group-hover:transform group-hover:-translate-y-[146px] ">
                <Image
                  src={data.src}
                  alt="picture"
                 
                  className="w-full h-full rounded-[26px] object-cover "
                />
              </div>

              {/* Hidden Content */}
              <div className="absolute top-[399px] left-0 w-full  p-3 grid gap-3 transition-transform duration-300 group-hover:translate-y-[-146px]">
                <div className="flex justify-between items-center text-lg">
                  <p>GUIDED TOUR</p>
                  <p>${data.price}/Day</p>
                </div>
                <div>
                  <p className="font-semibold text-[28px] ">
                    {data.place}
                  </p>
                  <div className="flex items-center justify-between">
                    <Image src={rating} alt="ratings" />
                    <p className="text-lg ">{data.days} Days tour</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TripPlannersSwiper;
