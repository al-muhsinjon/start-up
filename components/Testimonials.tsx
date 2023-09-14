"use client";
import React, { useState } from "react";
import { DividerImg } from ".";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
// import "swiper/css";
// import "swiper/modules/navigation.css";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Image from "next/image";

const data = [
  {
    id: 0,
    name: "natalie fullick",
    img: "/people-01.jpg",
    role: "ceo - envato inc",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    id: 1,
    name: "jason doe",
    img: "/people-02.jpg",
    role: "ceo - envato inc",
    title:
      "Lorem ipsum dolor sit amet, consectet adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    id: 2,
    name: "jake grahm",
    img: "/people-03.jpg",
    role: "ceo - envato inc",
    title:
      "Lorem ipsum dolor sit amet, consectet adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    id: 3,
    name: "abdugani jabborov",
    img: "/people-02.jpg",
    role: "ceo - envato inc",
    title:
      "Lorem Ipsum dolor sit amet, consectet adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
];

const Testimonials = () => {
  return (
    <div className="w-full pt-20 h-auto flex flex-col items-center gap-y-12 bg-slate-100">
      <div className="w-full h-auto flex justify-center items-center flex-col gap-y-6">
        <h3 className="font-light text-3xl">HEAR FROM</h3>
        <h2 className="font-semibold text-5xl ">TESTIMONIALS</h2>
        <p className="italic text-lg">We always listen to our clients.</p>
        <DividerImg width={70} height={10} className="object-contain" />
      </div>

      <div className="w-full h-[541px] ">
        <div className="relative w-full h-full">
          <div className="w-full h-full flex justify-center items-center">
            <Swiper
              loop={true}
              effect={"coverflow"}
              grabCursor={true}
              slidesPerView={3}
              centeredSlides={false}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                modifier: 0,
              }}
              pagination={true}
              modules={[EffectCoverflow]}
              className="w-[45%] h-full  p-2 overflow-hidden"
            >
              {data.map((team) => (
                <SwiperSlide className="group" key={team.id}>
                  {({ isNext }) => (
                    <div className="flex flex-col items-center gap-6">
                      <Image
                        src={team.img}
                        alt={team.img}
                        width={!isNext ? 100 : 150}
                        height={!isNext ? 100 : 150}
                        className={`object-contain ${
                          !isNext && "grayscale"
                        } rounded-full`}
                      />
                      {isNext && (
                        <>
                          <h1 className="text-3xl w-full uppercase text-center text-btn-color font-normal ">{team.name}</h1>
                          <p className="text-xs uppercase">{team.role}</p>
                          <p className="text-base text-center w-[150%]">{team.title}</p>
                        </>
                      )}
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
