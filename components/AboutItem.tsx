import { AboutItemProps } from "@/types";
import React from "react";
// import { IconBase } from "react-icons";

interface AboutProps {
  data: AboutItemProps;
}

const AboutItem = ({ data }: AboutProps) => {
  const { id, headerText, aboutText, href } = data;
  return (
    <>
      <p className="text-center group-hover:text-indigo-700 flex justify-center text-6xl text-[#75767c]">
        <data.icon />
      </p>
      <h2 className="uppercase text-lg text-[#55565b] group-hover:text-indigo-700">
        {headerText}
      </h2>
      <p className="text-xs m-auto text-[#55565b] w-2/3">{aboutText}</p>
    </>
  );
};

export default AboutItem;
