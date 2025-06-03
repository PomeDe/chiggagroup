"use cilent";

import { useRouter } from "next/navigation";


export default function Page2(){
    const router = useRouter();
    return (
        <div
      className="w-screen h-screen bg-center bg-cover flex flex-col p-10"
      style={{
        backgroundImage:
          "url('https://www.f1-fansite.com/wp-content/uploads/2023/11/M407963.jpg')",
      }}
    >
        <div className="w-full flex h-[100px]">
        <svg onClick={() => router.back("/")} class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"/>
</svg>
        </div>

<div className="flex justify-center items-center pt-120 gap-100">

        <img
        onClick={() => router.push("/lewis/hamilton")}
          src="/ham.png"
          alt="F1 logo"
          className="h-[200px] w-[200px]"
        />
        <img
          src="https://brandlogos.net/wp-content/uploads/2022/04/formula_1-logo-brandlogos.net_-512x512.png"
          alt="F1 logo"
          className="h-48 w-48"
        />
        <img
        onClick={() => router.push("/george/russer")}
          src="/rus.png"
          alt="F1 logo"
          className="h-[200px] w-[200px]"
        />
        


</div>

    </div>
    )
}