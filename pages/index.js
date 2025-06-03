"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div
      className="w-screen h-screen bg-center bg-cover flex flex-col"
      style={{
        backgroundImage:
          "url('https://images.ctfassets.net/1fvlg6xqnm65/5dNpodgNSF7R6XttO8RiXJ/dd6db1290460efb936811b33f50dc0fd/1x1_UPDATE.png')",
      }}
    >
      <div className="flex justify-between items-center p-10 text-white">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/2048px-Mercedes-Logo.svg.png"
          alt="Mercedes Logo"
          className="h-9 w-9"
        />
        <nav className="flex gap-16 text-lg">
          <p className="hover:underline underline-offset-8 cursor-pointer">Vehicle</p>
          <p className="hover:underline underline-offset-8 cursor-pointer">Stats</p>
          <p className="hover:underline underline-offset-8 cursor-pointer">Community</p>
          <p className="hover:underline underline-offset-8 cursor-pointer">About us</p>
          <p className="hover:underline underline-offset-8 cursor-pointer">About us</p>
        </nav>
        <div className="flex gap-6 text-lg">
          <p>Search</p>
          <p onClick={() => router.push("/loginpage/login")} className="cursor-pointer">Login</p>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center flex-col gap-6 pt-100">
        <button
  onClick={() => router.push("/mercedes/russel")}
  className="bg-white text-black font-bold px-6 py-3 rounded-full hover:bg-gradient-to-r hover:from-gray-200 hover:to-gray-400 hover:text-white transition duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-xl"
>
  Go to our F1 programme
</button>
        <img
          src="https://brandlogos.net/wp-content/uploads/2022/04/formula_1-logo-brandlogos.net_-512x512.png"
          alt="F1 logo"
          className="h-48 w-48"
        />
      </div>
    </div>
  );
}
