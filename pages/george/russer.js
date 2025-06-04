"use cilent";

import { useRouter } from "next/navigation";


export default function Page2(){
    const router = useRouter();
    return (
        <div
      className="w-screen h-screen bg-center bg-cover flex flex-col p-10"
      style={{
        backgroundImage:
          "url('https://f1chronicle.com/wp-content/uploads/2025/04/M497084.jpg')",
      }}
    >
        <div className="w-full flex h-[100px]">
        <svg onClick={() => router.back("/")} class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"/>
</svg>
        </div>
        <div className=" h-full w-[500px] flex flex-col p-10 gap-10 ml-auto">
            <p className="text-6xl font-[Jomolhari]">Lewis Hamilton</p>
            <p className="font-[Jomolhari text-3xl">Seven Times Formula One World Drivers' Chmapion</p>
            <div className="p-10">
            <div className="flex items-center justify-center bg-white/30 backfrop-blur-md rounded-3xl h-[200px]  w-[300px]">
                <img src="https://static1.squarespace.com/static/604cf273cbfeea1a501934ea/t/6051375f85c87105abc8dc72/1615935329580/FA+DJ+SIG.png?format=1500w" className="h-[100px] w-[200px]">
                </img>
            </div>
            </div>
        </div>

    </div>
    )
}
