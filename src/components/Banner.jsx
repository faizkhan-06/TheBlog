import React from "react";
import banner from "../assets/images/banner.jpeg";

function Banner() {
  return (
    <>
      {/* <div className=" mx-10 my-5 bg-gray-950 min-h-[30vh] text-gray-100 flex justify-center items-center border-gray-800 border-t-2 border-b-2 ">
        <h1 className=" text-9xl font-Poppins font-bold ">THE BLOG</h1>
      </div> */}
      <div className="mx-10 my-3 min-h-[30vh] border-gray-900 border-t-2 border-b-2">
        <img src={banner} alt="" className=" w-full h-full object-cover" />
      </div>
    </>
  );
}

export default Banner;
