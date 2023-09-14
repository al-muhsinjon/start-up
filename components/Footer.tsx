import { footerNav } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const Footer = () => {
  const { navigation, social } = footerNav;
  return (
     
      <footer className="w-full pt-12 flex flex-col justify-around  bg-[#212121] h-80">
        <div className="flex justify-evenly items-center ">
          <div>
            <Image src="/logo-light.svg" width={200} height={20} alt="" />
          </div>
          <nav className="flex gap-6 text-[#7d7d7d] capitalize">
            {navigation.map((nav) => (
              <Link key={nav.id} href={nav.url}>
                {nav.name}
              </Link>
            ))}
          </nav>
          <div className="flex gap-6 text-[20px] text-[#7d7d7d]">
            {social.map((social) => (
              <Link key={social.id} href={social.url}>
                <social.icon />
              </Link>
            ))}
          </div>
        </div>
        <p className="text-center text-[#7d7d7d]">
          Copyright 2016 - Roxine - Multi Purpose Theme by Waituk
        </p>
      </footer>
  );
};

export default Footer;
