import React, { useState } from "react";
import punk from "../assets/images/punk.jpg";
import user from "../assets/images/user-img.jpg";
import Navbar from "../components/Navbar";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";

function UserPage() {
  const [isLike, setIsLike] = useState(false);
  const [isFollowed, setIsFollowed] = useState(false);
  return (
    <>
      <Navbar />
      <div className=" h-full bg-gray-950 text-gray-200">
        <div className="px-10">
          <div className=" flex gap-5 items-center">
            <img src={user} alt="" className=" w-20 h-20 rounded-full" />
            <div className="">
              <div className=" flex items-center">
                <h1 className=" text-4xl font-medium mr-2">Alan Paul</h1>
                {isLike ? (
                  <GoHeartFill
                    className=" text-xl text-red-700 mr-5 hover:cursor-pointer"
                    onClick={() => setIsLike(!isLike)}
                  />
                ) : (
                  <GoHeart
                    className=" text-xl mr-5 hover:cursor-pointer"
                    onClick={() => setIsLike(!isLike)}
                  />
                )}
                <div
                  className="rounded-3xl bg-gradient-to-b from-blue-300 via-pink-300 to-purple-800 p-px mr-3 hover:cursor-pointer"
                  onClick={() => setIsFollowed(!isFollowed)}
                >
                  {!isFollowed ? (
                    <div className=" px-2 py-1 rounded-[calc(1.5rem-1px)] bg-gray-950">
                      <h1 className=" text-xs text-gray-400 select-none">
                        FOLLOW
                      </h1>
                    </div>
                  ) : (
                    <div className=" px-2 py-1 rounded-[calc(1.5rem-1px)] bg-gray-800">
                      <h1 className=" text-xs text-gray-200 select-none">
                        FOLLOWED
                      </h1>
                    </div>
                  )}
                </div>
              </div>
              <div>
                <h4 className=" text-sm text-gray-500">followers : 100</h4>
                <h4 className=" text-sm text-gray-500">likes : 10</h4>
              </div>
            </div>
          </div>
          <div className=" py-5">
            <h1 className=" text-2xl my-5">Blogs</h1>

            <div className=" grid grid-cols-3 gap-16">
              <div>
                <div>
                  <img
                    src={punk}
                    alt=""
                    className=" object-cover w-full h-full rounded-lg"
                  />
                </div>
                <h4 className=" text-sm text-gray-500 py-2">March 11, 2023</h4>
                <h2 className=" text-base font-bold py-2 text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero, doloribus?
                </h2>
                <h5 className=" text-sm text-gray-600 text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Totam, quas quaerat! Quibusdam iure sapiente eveniet nam
                  molestiae doloribus, pariatur itaque distinctio eos sit
                  delectus tempora! Itaque distinctio repellendus ratione
                  consectetur!
                </h5>
              </div>
              <div>
                <div>
                  <img
                    src={punk}
                    alt=""
                    className=" object-cover w-full h-full rounded-lg"
                  />
                </div>
                <h4 className=" text-sm text-gray-500 py-2">March 11, 2023</h4>
                <h2 className=" text-base font-bold py-2 text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero, doloribus?
                </h2>
                <h5 className=" text-sm text-gray-600 text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Totam, quas quaerat! Quibusdam iure sapiente eveniet nam
                  molestiae doloribus, pariatur itaque distinctio eos sit
                  delectus tempora! Itaque distinctio repellendus ratione
                  consectetur!
                </h5>
              </div>
              <div>
                <div>
                  <img
                    src={punk}
                    alt=""
                    className=" object-cover w-full h-full rounded-lg"
                  />
                </div>
                <h4 className=" text-sm text-gray-500 py-2">March 11, 2023</h4>
                <h2 className=" text-base font-bold py-2 text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero, doloribus?
                </h2>
                <h5 className=" text-sm text-gray-600 text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Totam, quas quaerat! Quibusdam iure sapiente eveniet nam
                  molestiae doloribus, pariatur itaque distinctio eos sit
                  delectus tempora! Itaque distinctio repellendus ratione
                  consectetur!
                </h5>
              </div>
              <div>
                <div>
                  <img
                    src={punk}
                    alt=""
                    className=" object-cover w-full h-full rounded-lg"
                  />
                </div>
                <h4 className=" text-sm text-gray-500 py-2">March 11, 2023</h4>
                <h2 className=" text-base font-bold py-2 text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero, doloribus?
                </h2>
                <h5 className=" text-sm text-gray-600 text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Totam, quas quaerat! Quibusdam iure sapiente eveniet nam
                  molestiae doloribus, pariatur itaque distinctio eos sit
                  delectus tempora! Itaque distinctio repellendus ratione
                  consectetur!
                </h5>
              </div>
              <div>
                <div>
                  <img
                    src={punk}
                    alt=""
                    className=" object-cover w-full h-full rounded-lg"
                  />
                </div>
                <h4 className=" text-sm text-gray-500 py-2">March 11, 2023</h4>
                <h2 className=" text-base font-bold py-2 text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero, doloribus?
                </h2>
                <h5 className=" text-sm text-gray-600 text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Totam, quas quaerat! Quibusdam iure sapiente eveniet nam
                  molestiae doloribus, pariatur itaque distinctio eos sit
                  delectus tempora! Itaque distinctio repellendus ratione
                  consectetur!
                </h5>
              </div>
              <div>
                <div>
                  <img
                    src={punk}
                    alt=""
                    className=" object-cover w-full h-full rounded-lg"
                  />
                </div>
                <h4 className=" text-sm text-gray-500 py-2">March 11, 2023</h4>
                <h2 className=" text-base font-bold py-2 text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero, doloribus?
                </h2>
                <h5 className=" text-sm text-gray-600 text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Totam, quas quaerat! Quibusdam iure sapiente eveniet nam
                  molestiae doloribus, pariatur itaque distinctio eos sit
                  delectus tempora! Itaque distinctio repellendus ratione
                  consectetur!
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserPage;
