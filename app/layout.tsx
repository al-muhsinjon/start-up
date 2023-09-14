import { Footer, Navbar } from "@/components";
import "./globals.css";

import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";

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
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
