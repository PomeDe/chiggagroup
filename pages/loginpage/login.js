"use client"

import { useRouter } from "next/navigation"

export default function Page3() {
    const router = useRouter();
    return (
        <div className="flex h-screen w-full bg-gradient-to-r from-black via-slate-800 to-black p-10">
            <div
                className="h-full w-full backdrop-blur-md p-10 rounded-3xl flex flex-row gap-10"
                style={{ backgroundColor: "rgba(44, 38, 56, 0.79)" }}
            >
                <div className="h-full w-[695px] flex bg-red-500 rounded-3xl overflow-hidden">
                    <img src="/mb.jpg" className="w-full h-full object-cover" />
                </div>

                <div className="flex flex-col h-full w-[600px] items-center pt-[80px] gap-8">
                    <p className="text-5xl text-white">Create an account</p>

                    <div className="flex flex-row gap-15 w-full justify-center">
                        <input
                            type="text"
                            placeholder="First Name"
                            className="text-white p-4 rounded-md w-[200px] bg-[rgba(82,71,103,1)] outline-none placeholder-gray-400"
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="text-white p-4 rounded-md w-[200px] bg-[rgba(82,71,103,1)] outline-none placeholder-gray-400"
                        />
                    </div>

                    <input
                        type="email"
                        placeholder="Email"
                        className="text-white p-4 rounded-md w-[460px] bg-[rgba(82,71,103,1)] outline-none placeholder-gray-400"
                    />

                    <input
                        type="password"
                        placeholder="Enter your password"
                        className="text-white p-4 rounded-md w-[460px] bg-[rgba(82,71,103,1)] outline-none placeholder-gray-400"
                    />

                    <div className="flex flex-row items-center w-full max-w-[460px] gap-3">
                        <input type="checkbox" className="h-5 w-5" />
                        <label className="text-white text-sm">Keep me signed out</label>
                    </div>

                    <button className="text-white p-4 rounded-md w-[460px] flex justify-center bg-purple-500 hover:bg-purple-600 transition" onClick={() => router.back("/")}>
                        Create account
                    </button>

                    <div className="flex items-center gap-4">
                        <div className="h-[1px] w-[165px] bg-white"></div>
                        <div className="text-gray-400 text-sm">or sign up with:</div>
                        <div className="h-[1px] w-[165px] bg-white"></div>
                    </div>
                    <div className="flex flex-row gap-12">
                        <div className="border border-white h-[70px] w-[200px] rounded-sm flex justify-center items-center">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png" className="h-10 w-30"></img>
                        </div>
                        <div className="border border-white h-[70px] w-[200px] rounded-sm flex justify-center items-center">
                        <img src="https://maketuwetlands.org.nz/wp-content/uploads/2023/03/Facebook-logo.png" className="h-11 w-20"></img>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
