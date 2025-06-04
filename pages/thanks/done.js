"use client";

import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();

  return (
    <div className="relative flex items-center justify-center h-screen w-full bg-gradient-to-r from-black via-slate-800 to-black p-10">
      <div className="absolute top-10 left-10">
      </div>
      <div className="items-center justify-center flex flex-col gap-10">
        <p className="text-8xl">THANK YOU</p>
        <button className="text-black bg-white h-[100px] w-[500px] hover:bg-green-700 hover:text-white shadow-xl shadow-blue-100 hover:transition duration-300 ease-in-out" onClick={() => router.push("/")}>Done</button>
      </div>
    </div>
  );
}
