"use client";
import Image from "next/image";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Sponsor = () => {
  const sponsors = [
    "/logo-02.png",
    "/logo-03.png",
    "/logo-04.png",
    "/logo-02.png",
    "/logo-03.png",
    "/logo-04.png",
  ];
  return (
    <div className="py-28">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={5}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="m-auto w-2/3"
      >
        {sponsors.map((sponsor, id) => (
          <SwiperSlide>
            <Image
              key={id}
              src={sponsor}
              className="object-contain"
              width={200}
              height={200}
              alt="Sponsors"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Sponsor;
