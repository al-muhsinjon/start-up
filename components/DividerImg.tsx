"use client"
import { ImgProps } from "@/types";
import Image from "next/image";
import React from "react";

const DividerImg = ({ width, height, className }: ImgProps) => {
  return (
    <Image
      src="/divider.png"
      alt="divider"
      width={width}
      className={className}
      height={height}
    />
  );
};

export default DividerImg;
