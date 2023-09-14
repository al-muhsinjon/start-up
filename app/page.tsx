"use client";
import {
  AboutItem,
  Button,
  Culture,
  DividerImg,
  Hero,
  TeamWork,
  Sponsor,
  Testimonials,
  Work,
} from "@/components";
import { aboutData, information, storyData } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="w-full h-[90vh] items-center flex justify-center  px-11">
        <div className="w-[65%] h-[62%] grid grid-cols-3 grid-rows-1  gap-y-24">
          <div className="text-start m-auto flex flex-col gap-y-6 ">
            <p className="text-lg">WHAT WE DO</p>
            <h2 className="font-semibold text-5xl">EXPERTS</h2>
            <p className="text-base italic">We build digital solutions.</p>
            <DividerImg width={70} height={10} className="object-conatin" />
          </div>
          {aboutData.map((data) => (
            <div
              className="text-center cursor-pointer bg-slate-100 hover:shadow-lg flex rounded-md hover:bg-white group transition-all ease-in-out duration-75 flex-col justify-around py-4 gap-6 m-auto"
              key={data.id}
            >
              <AboutItem data={data} />
              <button className="uppercase">learn more</button>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-[50vh] bg-design bg-fixed z-auto flex justify-center gap-y-8 items-center flex-col relative text-white">
        <div className="w-full h-full absolute z-10 bg-[#0000006c]" />
        <p className="z-50 relative font-josefin text-3xl font-light">
          BEST EVER DESIGN
        </p>
        <h2 className="relative z-40 font-josefin text-5xl font-bold ">
          Time to enhance your web presence!
        </h2>
        <Button
          handleClick={() => {}}
          className="relative z-40"
          title="get quotation"
        />
      </div>
      <Work />

      <div className="w-full h-[70vh] flex justify-center items-center ">
        <div className="w-[60%] h-full">
          <div className="text-start  flex flex-col gap-y-6">
            <p className="text-3xl font-light">THE LIFE SIZE</p>
            <h2 className="text-5xl font-bold">BRAND STORY</h2>
            <p className="text-xl italic">
              View multiple content block layouts under features section.
            </p>
            <DividerImg width={70} height={10} className="object-contain" />
          </div>
          <div className="flex mt-6 justify-evenly gap-24">
            <div className="w-[50%]">
              <p className="text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magnaal qua. Ut
                enim ad minim veniam, quis nostrud exercitation ulla mco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-base mt-6 leading-relaxed">
                Excepteur sint occaecat cupidatat non proident, sunt in culp a
                qui officia deserunt mollit anim id est laborum. Sed ut per
                spiciatis unde omnis iste natus error sit voluptatem accusan
                tium doloremque laudantium, totam rem aperiam, eaque ip
              </p>
            </div>
            <div className="w-[50%]">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="grid mt-6 gap-y-4 grid-cols-2">
                {storyData.map((story) => (
                  <Link
                    className="text-xs text-btn-color"
                    href={story.href}
                    key={story.id}
                  >
                    {story.name}
                  </Link>
                ))}
              </p>
            </div>
          </div>
          <Button
            className="mt-20"
            handleClick={() => {}}
            title="view proects"
            blacked
          />
        </div>
      </div>
      <Culture />
      <TeamWork />

      <div className="bg-visual bg-cover mt-24 bg-fixed w-full flex h-96 bg-no-repeat ">
        <div className="w-full h-full flex bg-[#00000095]">
          {information.map((info) => (
            <div
              key={info.id}
              className="w-full h-full hover:bg-btn-color gap-y-3 flex flex-col justify-center items-center "
            >
              <span className="text-white">
                <info.icon size={50} />
              </span>
              <h2 className="text-[#c1c5cd] text-3xl font-semibold">
                {info.numeric}
              </h2>
              <h2 className="text-white uppercase text-2xl">{info.title}</h2>
            </div>
          ))}
        </div>
      </div>

      <Testimonials />

      {/* <TestiTest /> */}

      <Sponsor />
    </>
  );
}
