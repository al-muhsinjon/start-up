import Image from "next/image";
import React from "react";
import { DividerImg } from ".";

const Culture = () => {
  return (
    <div className="w-full h-[120vh] pt-28  bg-no-repeat bg-bottom text-center bg-culture flex flex-col items-center justify-start ">
      <div className="flex flex-col gap-y-6">
        <h3 className="text-3xl font-light">WORK PLACE</h3>
        <h2 className="text-5xl font-bold">THE CULTURE</h2>
        <p className="text-xl italic">
          Lovely people with nack for design creativity flourish here.
        </p>
        <DividerImg width={70} className="m-auto" height={10} />
      </div>
      <p className="text-center mt-10 w-[48%] leading-8 text-base font-poppins">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse.
      </p>
    </div>
  );
};

export default Culture;
