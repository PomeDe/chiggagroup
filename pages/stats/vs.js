"use client";

import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();

  return (
    <div className="relative flex items-center justify-center h-screen w-full bg-gradient-to-r from-black via-slate-800 to-black p-10">
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
      <div className="flex flex-col w-[600px] h-full items-center pt-10 gap-10 p-10">
      <img
        className="h-[45px] w-[45px]"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/2048px-Mercedes-Logo.svg.png"
        alt="Mercedes Logo"
      />
      <div className="flex items-center flex-col gap-2">
        <p className=" text-2xl">1-ON-1 COMPARISON</p>
        <p>Select Two Cars for Detailed Comparison</p>
      </div>
      <div className="w-full bg-gradient-to-r from-slate-800 to-blue-900 h-[300px] shadow-xl p-10 pt-15">
       <div className="flex flex-row gap-10">
        <input
        type="text"
        placeholder="Car #1"
        className="text-black p-4 rounded-xl w-[200px] bg-white outline-none placeholder-gray-400"
        >
        </input>
        <input
        type="text"
        placeholder="Car #2"
        className="text-black p-4 rounded-xl w-[200px] bg-white outline-none placeholder-gray-400"
        >
        </input>
       </div>
       <div className="ml-23 mt-10">
        <button onClick={() => router.push("/machine/stats")} className="text-black bg-cyan-400 p-5 w-[250px] rounded-xl hover:duration-300 ease-in cursor-pointer hover:text-white hover:bg-blue-700">Submit</button>
       </div>
      </div>
      </div>
    </div>
  );
}
