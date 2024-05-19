import React from "react";
import punkImg from "../assets/images/punk.jpg";

function BlogSidebar() {
  return (
    <>
      <div className="space-y-4">
        <div className="flex items-start space-x-4 rounded-lg px-2 py-1  shadow-soft-light-on-dark">
          <img
            src={punkImg}
            alt="Punk"
            className="w-16 h-16 rounded-lg object-cover"
          />
          <div>
            <h1 className="text-sm font-semibold text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptas, eaque.
            </h1>
            <h4 className="text-slate-700 text-xs mt-1">January 11, 2022</h4>
          </div>
        </div>
        {/* Repeat the above block for more items if needed */}
      </div>
    </>
  );
}

export default BlogSidebar;
