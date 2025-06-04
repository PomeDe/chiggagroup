"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="relative flex items-center justify-center h-screen w-full bg-gradient-to-r from-black via-[#0F1425] to-black overflow-hidden px-10 py-20">
      <div className="absolute top-10 left-10">
        <svg
          onClick={() => router.back()}
          className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 8 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
          />
        </svg>
      </div>
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/2048px-Mercedes-Logo.svg.png"
          alt="Mercedes Logo"
          className="w-10 h-10"
        />
      </div>
      <div className="flex flex-row justify-center gap-30 h-screen pt-40">
      <div className="h-full  w-[300px] flex flex-col gap-6 justify-center pb-40">
        <p>Maybach S-680</p>
        <p className="text-3xl">$ 240,500</p>
        <p className="text-xs">The Maybach S-680 ineup offers a range of high-luxury cars, each with distinct specifications.</p>
        <div className="p-10">
            <div className="w-[200px] h-[50px] bg-gradient-to-r from-[#9094B6] flex items-center justify-center to-[#1C1F32] rounded-xl" onClick={() => router.push("/day/choose")}>
                Test Drive
            </div>
        </div>
      </div>
      <div className="h-full w-[400px] flex items-center justify-center pb-40">
        <img src="https://vehicle-images.dealerinspire.com/stock-images/chrome/610c0c0c2cf1a07cde0682e9facb95fb.png" className="w-[700px]">
        </img>
      </div>
      <div className="h-full  w-[300px] flex flex-col justify-center items-center pb-60 p-5 gap-5">
      <div className="flex flex-row gap-5">
            <div className="h-[100px] w-[100px]  bg-gradient-to-r from-[#9094B6] to-[#1C1F32] rounded-xl border-white border flex flex-col items-center justify-center gap-3">
                <p>210km/h</p>
                <p className="text-gray-400 text-xs">Top speed</p>
            </div>
            <div className="h-[100px] w-[100px]  bg-gradient-to-r from-[#9094B6] to-[#1C1F32] rounded-xl border-white border flex flex-col items-center justify-center gap-3">
                <p>4.5s</p>
                <p className="text-gray-400 text-xs">Acceleration</p>
            </div>
        </div>
        <div className="flex flex-row gap-5">
            <div className="h-[100px] w-[100px]  bg-gradient-to-r from-[#9094B6] to-[#1C1F32] rounded-xl border-white border">
            <div className="h-[100px] w-[100px]  bg-gradient-to-r from-[#9094B6] to-[#1C1F32] rounded-xl border-white border flex flex-col items-center justify-center gap-3">
                <p>621HP</p>
                <p className="text-gray-400 text-xs">Horsepower</p>
            </div>
            </div>
            <div className="h-[100px] w-[100px]  bg-gradient-to-r from-[#9094B6] to-[#1C1F32] rounded-xl border-white border">
            <div className="h-[100px] w-[100px]  bg-gradient-to-r from-[#9094B6] to-[#1C1F32] rounded-xl border-white border flex flex-col items-center justify-center gap-3">
                <p>664lb-ft</p>
                <p className="text-gray-400 text-xs">Torgue</p>
            </div>
            </div>
        </div>
      </div>
      </div>
    </div>
  );
}
