"use cilent";

import { useRouter } from "next/navigation";


export default function Page2(){
    const router = useRouter();
    return (
        <div
      className="w-screen h-screen bg-center bg-cover flex flex-col p-10"
      style={{
        backgroundImage:
          "url('https://news.cgtn.com/news/2021-02-04/Report-Lewis-Hamilton-Mercedes-close-to-reaching-new-contract-XBPFtLAuzu/img/90d46423d0ca493caba2521c286af465/90d46423d0ca493caba2521c286af465.jpeg')",
      }}
    >
        <div className="w-full flex h-[100px]">
        <svg onClick={() => router.back("/")} class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"/>
</svg>
        </div>
        <div className=" h-full w-[500px] flex flex-col p-10 gap-10">
            <p className="text-6xl font-[Jomolhari]">Lewis Hamilton</p>
            <p className="font-[Jomolhari text-3xl">Seven Times <div className="bg-orange-500 text-black h-auto w-[120px]">Formula</div> One World Drivers' Chmapion</p>
            <div className="p-10">
            <div className="flex items-center justify-center bg-white/30 backfrop-blur-md rounded-3xl h-[200px]  w-[300px]">
                <img src="/ls.png" className="h-[100px] w-[100px]">
                </img>
            </div>
            </div>
        </div>

    </div>
    )
}