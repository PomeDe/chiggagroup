"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page2() {
  const router = useRouter();

  const [bgImage, setBgImage] = useState(
    "https://i.bstr.es/highmotor/2022/04/2022-Mercedes-Maybach-S680-Virgil-Abloh-2.jpg"
  );

  return (
    <div
      className="w-screen h-screen bg-center bg-cover flex flex-col justify-between p-10 transition-all duration-500"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="w-full flex h-[100px]">
        <svg
          onClick={() => router.back()}
          className="w-6 h-6 text-gray-800 dark:text-white cursor-pointer"
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

      <div className="flex justify-center gap-6 pb-10">
        <button
          onMouseMove={() =>
            setBgImage(
              "https://media.cnn.com/api/v1/images/stellar/prod/200904111827-03-virgil-abloh-mercedes-benz-g-class.jpg?q=w_3508,h_2480,x_0,y_0,c_fill"
            )
          }
          className="text-white backdrop-blur text-4xl font-semibold px-6 py-2 rounded-xl hover:bg-white hover:text-black transition h-[200px] w-[400px]" onClick={() => router.push("/gclass/car")}
        >
          G-Class
        </button>

        <button
          onMouseMove={() =>
            setBgImage(
              "https://i.bstr.es/highmotor/2022/04/2022-Mercedes-Maybach-S680-Virgil-Abloh-2.jpg"
            )
          }
          className="text-[#CCBFB5] backdrop-blur text-4xl font-semibold px-6 py-2 rounded-xl hover:bg-[#CCBFB5] hover:text-white hover:border border-white transition h-[200px] w-[400px]" onClick={() => router.push("/maybach/car")}
        >
          Maybach S-680
        </button>

        <button
          onMouseMove={() =>
            setBgImage(
              "https://www.mercedes-amg.com/media/images/7fd409d711a1f70473c2658034d201b989610946-1920x1080.jpg?auto=format&fit=max&q=75&w=1330"
            )
          }
          className="text-[#52E3E6] backdrop-blur text-4xl font-semibold px-6 py-2 rounded-xl hover:bg-[#52E3E6] hover:text-white hover:border border-white transition h-[200px] w-[400px]" onClick={() => router.push("/amg/car")}
        >
          AMG GT
        </button>
      </div>
    </div>
  );
}

