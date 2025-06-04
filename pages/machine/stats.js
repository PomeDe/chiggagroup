"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-slate-900 to-black text-white flex flex-col items-center justify-center p-10">
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

      <div className="flex gap-16 items-start">
        <div className="flex flex-col items-center gap-4">
          <div className="mr-auto flex flex-col gap-4">
          <p className="text-4xl">Maybach S-680</p>
          <p className="text-xl text-gray-400">$240,500</p>
          </div>
          <img
            src="https://static.foxdealer.com/928/2023/01/2022-S-MAYBACH-clr-1.png?w=1024"
            className="w-[300px] h-auto"
            alt="Maybach"
          />
        </div>
        <div className="flex flex-col gap-6 text-sm">
          <div>
            <p className="mb-1">Torque</p>
            <div className="flex gap-4">
              <div className="w-40 h-3 bg-gray-600">
                <div className="w-[90%] h-full bg-blue-500"></div>
              </div>
              <div className="w-40 h-3 bg-gray-600">
                <div className="w-[70%] h-full bg-blue-500"></div>
              </div>
            </div>
          </div>
          <div>
            <p className="mb-1">Price</p>
            <div className="flex gap-4">
              <div className="w-40 h-3 bg-gray-600">
                <div className="w-[100%] h-full bg-blue-500"></div>
              </div>
              <div className="w-40 h-3 bg-gray-600">
                <div className="w-[60%] h-full bg-blue-500"></div>
              </div>
            </div>
          </div>
          <div>
            <p className="mb-1">Acceleration</p>
            <div className="flex gap-4">
              <div className="w-40 h-3 bg-gray-600">
                <div className="w-[75%] h-full bg-blue-500"></div>
              </div>
              <div className="w-40 h-3 bg-gray-600">
                <div className="w-[85%] h-full bg-blue-500"></div>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-4 text-center text-white">
            <div className="text-l rounded-xl h-[50px] w-[100px] border flex items-center justify-center text-white border-white p-4 hover:bg-white hover:text-black hover:duration-300 ease-in cursor-pointer">Rate 10/9</div>
            <div className="text-l rounded-xl h-[50px] w-[100px] border flex items-center justify-center text-white border-white p-4 hover:bg-white hover:text-black hover:duration-300 ease-in cursor-pointer">Rate 10/8</div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
         <div className="ml-auto flex flex-col gap-4">
         <p className="text-4xl">G-Class</p>
          <p className="text-xl text-gray-400">$144,560</p>
         </div>
          <img
            src="https://vehicle-images.dealerinspire.com/stock-images/thumbnails/large/chrome/23fed4aa00bed26e7b390147a3161d8e.png"
            className="w-[250px] h-auto"
            alt="G-Class"
          />
        </div>
      </div>
    </div>
  );
}
