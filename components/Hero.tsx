"use client";
import React from "react";
import { Button } from ".";

const Hero = () => {
  return (
    <main className=" bg-hero text-center w-full h-screen bg-cover bg-no-repeat bg-bottom">
      <div className="w-full bg-[#000000a1] text-white flex  items-center justify-center h-full">
        <div className=" text-start font-josefin">
          <h4 className="text-4xl font-medium leading-loose uppercase">
            graphics. web. digital
          </h4>
          <h1 className="uppercase text-[11rem] mt-2 font-bold">Start - up</h1>
          <p className="text-base font-poppins leading-relaxed w-5/12">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim.
          </p>
          <Button
            handleClick={() => {}}
            className="mt-12"
            title="explore work"
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
