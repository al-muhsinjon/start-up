"use client";
import { Footer, Navbar } from "@/components";
import "./globals.css";

import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Josefin_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Start-up",
  description: "Rahmatillo and Me start-up website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
    <html lang="en">
      <body className={inter.className}>
        <Navbar scrollActive={scrollActive} scrollTop={scrollTop} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
