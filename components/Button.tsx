import { ButtonProps } from "@/types";
import React from "react";

const Button = ({ title, className, handleClick, blacked }: ButtonProps) => {
  return (
    <button
      onClick={handleClick}
      className={`${className} ${
        !blacked ? "bg-btn-color border-btn-color" : "bg-black hover:bg-white hover:text-black border-black"
      }  uppercase border-2 text-lg rounded text-white px-14 py-4 `}
    >
      {title}
    </button>
  );
};

export default Button;
