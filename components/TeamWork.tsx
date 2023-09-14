"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { teamworkData } from "@/constants";
import { DividerImg } from ".";

const TeamWork = () => {
  return (
    <>
      <div className="w-full h-auto gap-y-12 relative flex flex-col justify-center items-center ">
        <div className="w-[60%] mt-28  h-full">
          <div className="text-start  flex flex-col gap-y-6">
            <p className="text-3xl font-light">THE LIFE SIZE</p>
            <h2 className="text-5xl font-bold">BRAND STORY</h2>
            <p className="text-xl italic">
              View multiple content block layouts under features section.
            </p>
            <DividerImg width={70} height={10} className="object-contain" />
          </div>
        </div>
        
        <div className="w-full h-[541px] ">
          <div className="relative w-full h-full">
            <div className="w-full h-full flex justify-center items-center">
              <Swiper
                slidesPerView={3}
                spaceBetween={25}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                pagination={{
                  clickable: true,
                }}
                className="w-[60%] h-full p-2 overflow-hidden"
                modules={[Navigation]}
              >
                {teamworkData.map((team) => (
                  <SwiperSlide className="group" key={team.id}>
                    <div>
                      <Image
                        className="object-contain block"
                        src={team.src}
                        alt=""
                        fill
                      />
                      <div className="relative group-hover:top-72 text-end px-6 top-[96rem] ease-out duration-700 py-8 text-white transition-all bg-btn-color">
                        <h2 className="text-xl font-medium uppercase">
                          {team.name}
                        </h2>
                        <p className="uppercase italic text-base">
                          {team.role}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="swiper-button-prev ml-[10%] font-black after:text-gray-500  " />
              <div className="swiper-button-next mr-[10%] shadow-2xl after:text-gray-500 font-black "></div>
            </div>
          </div>
        </div>


        <div className="w-[60%]">
          <p>
            Martin loves gossiping code on his iPhone. Consectetur adipisicing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur.
          </p>
        </div>
      </div>
    </>
  );
};

export default TeamWork;

{
  /* <div className="w-full relative h-full">
        
        <div className="w-full h-full flex justify-center items-center">
          <Swiper
            slidesPerView={3}
            spaceBetween={25}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{
              clickable: true,
            }}
            className="w-[60%] h-[55%] p-2 overflow-hidden"
            modules={[Navigation]}
          >
            {teamworkData.map((team) => (
              <SwiperSlide className="group" key={team.id}>
                <div className="bg-blue-200">
                  <Image
                    className="object-contain block"
                    src={team.src}
                    alt=""
                    fill
                  />
                  <div className="relative group-hover:top-72 text-end px-6 top-[96rem] ease-out duration-700 py-8 text-white transition-all bg-btn-color">
                    <h2 className="text-xl font-medium uppercase">
                      {team.name}
                    </h2>
                    <p className="uppercase italic text-base">{team.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-button-prev ml-[10%] after:font-black after:text-gray-600"></div>
          <div className="swiper-button-next mr-[10%] shadow-2xl after:text-gray-600 font-black after:content-[''] "></div>
        </div>
      </div> */
}
