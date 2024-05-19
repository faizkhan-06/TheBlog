import React from "react";
import userImg from "../assets/images/user-img.jpg";

function BlogUserBox() {
  return (
    <>
      <div className="text-gray-200">
        <div className=" flex items-center p-4">
          <img
            src={userImg}
            alt="user image"
            className=" mr-3 max-w-9 min-h-9 rounded-full"
          />
          <h4 className=" text-2xl mr-3 font-medium">Alan Paul</h4>
          <div className="rounded-3xl bg-gradient-to-b from-blue-300 via-pink-300 to-purple-800 p-px">
            <div className=" px-2 py-1 rounded-[calc(1.5rem-1px)] bg-gray-950">
              <h1 className=" text-xs text-gray-400">FOLLOW</h1>
            </div>
          </div>
          <h4 className=" text-slate-700 text-sm my-3 px-4">January 11,2022</h4>
        </div>
      </div>
    </>
  );
}

export default BlogUserBox;
