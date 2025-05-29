"use client";

import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className="bg-[url('https://images.ctfassets.net/1fvlg6xqnm65/5dNpodgNSF7R6XttO8RiXJ/dd6db1290460efb936811b33f50dc0fd/1x1_UPDATE.png')] w-full h-screen bg-cover bg-center"
    >
      <div className="flex flex-row items-center justify-between p-10">

        <img
          className="h-[35px] w-[35px]"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/2048px-Mercedes-Logo.svg.png"
          alt="Mercedes Logo"
        />
        <div className="flex flex-row gap-20 text-white text-lg items-center">
          <p className="hover:underline underline-offset-8 transition-all duration-1000 ease-in-out">Vehicle</p>
          <p className="hover:underline underline-offset-8 transition-all duration-1000 ease-in-out">Vehicle</p>
          <p className="hover:underline underline-offset-8 transition-all duration-1000 ease-in-out">Stats</p>
          <p className="hover:underline underline-offset-8 transition-all duration-1000 ease-in-out">Community</p>
          <p className="hover:underline underline-offset-8 transition-all duration-1000 ease-in-out">About us</p>
        </div>
         <div className="flex flex-row gap-8 text-white text-lg items-center">
          <p>Search</p>
          <p>Login</p>
        </div>
      </div>
      <div className="flex h-screen items-center justify-center flex-col pt-70 gap-1">
        <div className="border rounded-full bg-white text-black p-3 font-bold">Go to our F1 programm</div>
        <img
          className="h-[200px] w-[200px]"
          src="https://brandlogos.net/wp-content/uploads/2022/04/formula_1-logo-brandlogos.net_-512x512.png"
          alt="f1 logo"
        />
      </div>
    </div>
  );
}
