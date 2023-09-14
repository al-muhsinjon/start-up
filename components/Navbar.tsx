"use client";
import { navigationMenu } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, {useState, useEffect} from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoIosArrowUp } from "react-icons/io";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";

interface NavbarProps {
  scrollActive: boolean;
  scrollTop: boolean;
}

const Navbar = () => {

  const [scrollActive, setScrollActive] = useState(false);

  const [scrollTop, setScrollTop] = useState(true);
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrollActive(true);
    } else {
      setScrollActive(false);
    }
    if (window.scrollY < 100) {
      setScrollTop(true);
    } else {
      setScrollTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>
      <Link
        href="/"
        
        className={`${
          scrollTop ? "hidden" : "flex"
        }  bottom-10 fixed p-3  bg-gray-200 rounded left-[97%]  z-[100]`}
      >
        <IoIosArrowUp />
      </Link>
      <header
        className={`w-full ${
          scrollActive && "bg-white"
        } fixed z-[100] top-0 flex px-12 justify-between items-center h-20`}
      >
        <Link href="/">
          <Image
            src={scrollActive ? "/logo-light.svg" : "/logo.svg"}
            alt="logo"
            width={150}
            height={50}
            className="object-contain"
          />
        </Link>
        <div className="flex gap-10">
          <nav className="flex gap-10">
            {navigationMenu?.map((menu) => (
              <Link
                className={`${
                  scrollActive ? "text-black" : "text-white"
                } uppercase text-sm font-poppins font-semibold`}
                key={menu.id}
                href={menu.url}
              >
                {menu.name}
              </Link>
            ))}
          </nav>
          <div
            className={` ${
              scrollActive ? "text-black" : "text-white"
            } flex gap-6`}
          >
            <button>
              <AiOutlineShoppingCart />
            </button>
            <button>
              <AiOutlineSearch />
            </button>
            <button>
              <BiMenuAltLeft />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
