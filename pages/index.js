"use client";
import { Geist, Geist_Mono } from "next/font/google";
import { useRouter } from "next/navigation"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const router = useRouter();
  return (
    <div
    className="w-screen h-screen bg-center bg-cover flex flex-col p-3"
    style={{
      backgroundImage:
        "url('https://images.ctfassets.net/1fvlg6xqnm65/5dNpodgNSF7R6XttO8RiXJ/dd6db1290460efb936811b33f50dc0fd/1x1_UPDATE.png')",
    }}
    >
      <div className="flex flex-row items-center justify-between p-10">

        <img
          className="h-[35px] w-[35px]"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/2048px-Mercedes-Logo.svg.png"
          alt="Mercedes Logo"
        />
        <div className="flex flex-row gap-20 text-white text-lg items-center">
          <p className="hover:underline underline-offset-8 transition-all duration-300 ease-in-out cursor-pointer hover:text-blue-400" onClick={() => router.push("/car/c")}>Vehicle</p>
          <p className="hover:underline underline-offset-8 transition-all duration-300 ease-in-out cursor-pointer hover:text-blue-400" onClick={() => router.push("/car/c")}>Vehicle</p>
          <p className="hover:underline underline-offset-8 transition-all duration-300 ease-in-out cursor-pointer hover:text-blue-400" onClick={() => router.push("/stats/vs")}>Stats</p>
          <p className="hover:underline underline-offset-8 transition-all duration-300 ease-in-out cursor-pointer hover:text-blue-400" onClick={() => router.push("/community/text")} >Community</p>
          <p className="hover:underline underline-offset-8 transition-all duration-300 ease-in-out cursor-pointer hover:text-blue-400">About us</p>
        </div>
         <div className="flex flex-row gap-8 text-white text-lg items-center">
          <p>Search</p>
          <p className="cursor-pointer hover:text-blue-400" onClick={() => router.push("/loginpage/login")}>Login</p>
        </div>
      </div>
      <div className="flex h-screen items-center justify-center flex-col pt-100 gap-1">
        <div className="border rounded-full bg-white text-black p-3 font-bold cursor-pointer hover:bg-black hover:text-white hover:duration-300 ease-in-out" onClick={() => router.push("/mercedes/russel")}>Go to our F1 programm</div>
        <img
          className="h-[200px] w-[200px]"
          src="https://brandlogos.net/wp-content/uploads/2022/04/formula_1-logo-brandlogos.net_-512x512.png"
          alt="f1 logo"
        />
      </div>
    </div>
  );
}
