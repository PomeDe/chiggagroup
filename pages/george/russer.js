"use cilent";

import { useRouter } from "next/navigation";


export default function Page2(){
    const router = useRouter();
    return (
        <div
      className="w-screen h-screen bg-center bg-cover flex flex-col p-10"
      style={{
        backgroundImage:
          "url('https://www.total-motorsport.com/wp-content/uploads/2023/07/M382403-scaled.jpg')",
      }}
    >
        <div className="w-full flex h-[100px] ">
        <svg onClick={() => router.back("/")} class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"/>
</svg>
        </div>
        <div className="flex flex-col w-[500px] h-screen p-10 gap-10 ml-auto">
            <p className="text-[50px] font-[Jomolhari]">Lewis Hamilton</p>
            <p className="text-[30px] font-[Jomolhari]">Seven Times Formula One World Drivers' Champion</p>
           <div className="p-10">
           <div className="h-[200px] w-[300px] bg-white/30 backdrop-blur-md rounded-sm flex justify-center items-center">
            <img src="/ls.png" className="h-[150] w-[150px]"></img>
           </div>
           </div>
        </div>

    </div>
    )
}