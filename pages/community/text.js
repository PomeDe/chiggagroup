"use cilent"

import { useRouter } from "next/navigation";


export default function Home() {
    const router = useRouter();
    return (
      <div className="w-screen h-screen bg-gradient-to-r from-black  via-[#3F4571]  to-black flex flex-row  justify-center">
        <div className="w-1/12">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBhDYwgPNz8nlMud3skRZtMMe0mr_o7TEImw&s"
            width={50}
            className="mt-8 ml-8 hover:cursor-pointer" onClick={() => router.back("/")}
          />
        </div>
        <div className="w-8/12 h-11/12 flex flex-col justify-start items-center">
          <div className="h-1/6 w-full flex flex-row  items-center justify-between">
            <div className="flex flex-row items-center space-x-4">
              <div className="h-10 w-10 rounded-full bg-white flex justify-center items-center">
                <img
                  src="https://www.iconpacks.net/icons/1/free-user-icon-295-thumb.png"
                  width={20}
                />
              </div>
  
              <h1 className="text-3xl font-bold">Name</h1>
            </div>
            <div className="flex justify-center items-center bg-gray-500 h-16 w-44 rounded-2xl">
              <p className="text-3xl font-semibold">Post</p>
            </div>
          </div>
          <input
            className="w-full bg-gray-700 h-16 rounded-2xl pl-[14px]"
            placeholder="Start a thread..."
            type="text"
          ></input>
          <div className="flex flex-row w-full h-14 mt-8 justify-between">
            <div className="flex flex-row items-center w-2/5 h-full space-x-5">
              <div className="flex flex-row justify-between w-3/5 h-full text-black font-sans items-center bg-neutral-400 rounded-4xl">
                <div className="flex flex-row items-center space-x-3 ml-5">
                  <img
                    className="h-10 w-10"
                    src="https://static.thenounproject.com/png/212328-200.png"
                  />
                  <p>vacation.png</p>
                </div>
                <img
                  className="h-8 w-8 mr-3 hover:cursor-pointer"
                  src="https://img.icons8.com/m_sharp/512/cancel--v2.png"
                />
              </div>
              <div className="flex flex-row justify-between w-2/5 h-full text-white font-sans items-center bg-gray-500 rounded-4xl">
                <div className="flex flex-row items-center space-x-3 ml-5">
                  <img
                    className="h-7 w-7 hover:cursor-pointer"
                    src="https://images.vexels.com/media/users/3/223322/isolated/lists/5a5a1248ae05274bd4c8bd32f574f4fd-plus-icon-symbol.png"
                  />
                  <p>Attach file</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between w-1/5 bg-gray-400 rounded-2xl">
              <p className="ml-3">Anyone can reply</p>
              <img
                className="h-4 w-4 hover:cursor-pointer mr-3"
                src="https://www.kusd.edu/wp-content/uploads/2021/09/Drop-down-arrow-icon-rounded.png"
              />
            </div>
          </div>
          <div className="flex flex-col mt-8 w-full items-center">
            <div className="flex flex-row justify-between w-full">
              <div className="h-10 w-10 rounded-full bg-white flex justify-center items-center">
                <img
                  src="https://www.iconpacks.net/icons/1/free-user-icon-295-thumb.png"
                  width={20}
                />
              </div>
              <div className="flex flex-col ml-10 w-11/12 space-y-4">
                <div className="flex flex-row justify-between">
                  <p>Name</p>
                  <p>6m</p>
                </div>
                <p className="text-sm ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque vitae volutpat nunc. Morbi et imperdiet lorem, eu
                  tincidunt nunc. Nulla lobortis lorem a pellentesque fermentum.
                  Integer viverra mauris risus, sed varius enim condimentum eu.
                  Aliquam imperdiet ante vel massa pellentesque, ac tempus urna
                  laoreet. Integer ornare scelerisque enim non scelerisque. Donec
                  pretium arcu dolor, eu pharetra felis auctor vitae. Vivamus sit
                  amet tortor eget arcu ultricies tempor in id libero. Integer
                  vulputate ultrices sagittis. Phasellus tempor nisl sollicitudin
                  enim gravida, sit amet eleifend enim venenatis. Nulla pulvinar
                  feugiat mattis.
                </p>
              </div>
            </div>
            <div className="w-5/6 h-2/3 flex items-center justify-center bg-neutral-500 rounded-2xl mt-8">
  <img className=" w-1/2"
                  src="https://www.motortrend.com/uploads/sites/10/2019/12/2020-mercedes-benz-s-class-s450-sedan-angular-front.png?w=768&width=768&q=75&format=webp"
                />
            </div>
            <div className="flex flex-row w-full items-center mt-5 ml-52 justify-start space-x-6">
              <img className="w-8 h-8 hover:cursor-pointer"
                  src="            https://www.pngall.com/wp-content/uploads/14/White-Heart-PNG-Image-HD.png"
                />
                            <img className="w-9 h-9 hover:cursor-pointer"
                  src="            https://img.icons8.com/ios7/600/FFFFFF/speech-bubble.png"
                />
                                          <img className="w-9 h-9 hover:cursor-pointer"
                  src="                          https://img.icons8.com/m_outlined/512/FFFFFF/share.png"
                />
            </div>
            <div className="flex flex-row ml-52 w-full justify-start mt-5 items-center">
                        <p className="text-white text-sm font-extralight ">Liked by User10202 and others</p>
            </div>
          </div>
        </div>
        <div className="w-3/12 flex flex-col items-center justify-start">
        <div className="flex flex-row w-full justify-around mt-10 items-center "> 
          <p className="text-xl font-semibold ml-10">Follow Suggestions</p>
          <div className="flex items-center justify-center w-40 h-10 bg-gray-400 rounded-xl mr-10">View All</div>
        </div>
        <div className="flex flex-row w-full justify-around items-center mt-5 ">
          <div className="flex flex-row w-2/5 justify-between items-center space-x-2">
                      <div className="h-10 w-10 rounded-full bg-white flex justify-center items-center">
                <img
                  src="https://www.iconpacks.net/icons/1/free-user-icon-295-thumb.png"
                  width={20}
                />
              </div>
              <p className="ml-auto">Jane Cooper</p>
          </div>
          <p className="text-gray-500 hover:text-white hover:cursor-pointer">Follow</p>
        </div>
        <div className="flex flex-row w-full justify-around items-center mt-5 ">
          <div className="flex flex-row w-2/5 justify-between items-center space-x-2">
                      <div className="h-10 w-10 rounded-full bg-white flex justify-center items-center">
                <img
                  src="https://www.iconpacks.net/icons/1/free-user-icon-295-thumb.png"
                  width={20}
                />
              </div>
              <p className="ml-auto">Jane Doe</p>
          </div>
          <p className="text-gray-500 hover:text-white hover:cursor-pointer">Follow</p>
        </div>
        <div className="flex flex-row w-full justify-around items-center mt-5">
          <div className="flex flex-row w-2/5 justify-between items-center space-x-2">
                      <div className="h-10 w-10 rounded-full bg-white flex justify-center items-center">
                <img
                  src="https://www.iconpacks.net/icons/1/free-user-icon-295-thumb.png"
                  width={20}
                />
              </div>
              <p>Dexter Morgan</p>
          </div>
          <p className="text-gray-500 hover:text-white hover:cursor-pointer">Follow</p>
        </div>
        <div className="flex flex-row w-full justify-around items-center mt-5">
          <div className="flex flex-row w-2/5 justify-between items-center space-x-2">
                      <div className="h-10 w-10 rounded-full bg-white flex justify-center items-center">
                <img
                  src="https://www.iconpacks.net/icons/1/free-user-icon-295-thumb.png"
                  width={20}
                />
              </div>
              <p>Brian Moser</p>
          </div>
          <p className="text-gray-500 hover:text-white hover:cursor-pointer">Follow</p>
        </div>
        <div className="flex flex-row w-full justify-around items-center mt-5 ">
          <div className="flex flex-row w-2/5 justify-between items-center space-x-2">
                      <div className="h-10 w-10 rounded-full bg-white flex justify-center items-center">
                <img
                  src="https://www.iconpacks.net/icons/1/free-user-icon-295-thumb.png"
                  width={20}
                />
              </div>
              <p>Jesse Pinkman</p>
          </div>
          <p className="text-gray-500 hover:text-white hover:cursor-pointer">Follow</p>
        </div>
        <div className="flex flex-row w-full justify-around items-center mt-5">
          <div className="flex flex-row w-2/5 justify-between items-center space-x-2">
                      <div className="h-10 w-10 rounded-full bg-white flex justify-center items-center">
                <img
                  src="https://www.iconpacks.net/icons/1/free-user-icon-295-thumb.png"
                  width={20}
                />
              </div>
              <p>Walter White</p>
          </div>
          <p className="text-gray-500 hover:text-white hover:cursor-pointer">Follow</p>
        </div>
        </div>
      </div>
    );
  }
  