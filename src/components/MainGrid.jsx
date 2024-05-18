import React from "react";
import punkImg from "../assets/images/punk.jpg";

function MainGrid() {
  return (
    <>
      <div className=" py-10 grid grid-cols-2">
        <div className="p-5">
          <div className="mx-5 ">
            <div className="flex justify-center items-center px-4  ">
              <img
                src={punkImg}
                alt="punk image"
                className="h-full w-full object-cover rounded-lg "
              />
            </div>
            <h4 className=" text-slate-700 text-sm my-3 px-4">
              January 11,2022
            </h4>

            <h1 className="px-4 text-justify text-slate-200 text-xl font-semibold my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              ullam, expedita ratione repudiandae laborum accusamus enim ad
            </h1>
            <h3 className=" px-4 text-justify text-slate-600 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              dolore perferendis consectetur soluta sequi id hic, vitae neque
              maiores nam harum fugit quo! Molestias nobis voluptates quidem ea
              ratione incidunt nihil. Molestiae, ducimus reprehenderit dicta
              architecto ipsum voluptatem magni laudantium!
            </h3>
          </div>
        </div>
        <div className=" p-5 gird grid-rows-3">
          <div className=" mx-5 ">
            <div className=" flex flex-col">
              <div className="grid grid-cols-2">
                <div className=" w-full h-full pr-4">
                  <img
                    src={punkImg}
                    alt=""
                    className=" object-cover w-full h-full rounded-lg"
                  />
                </div>
                <div className=" ml-2 mt-2">
                  <h4 className=" text-sm text-slate-700 mb-3">
                    March 27, 2023
                  </h4>
                  <h2 className=" text-slate-200 font-semibold text-justify ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                    nesciunt atque similique sapiente sunt voluptas in expedita
                    repellat nihil assumenda.
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <hr className="mx-5 my-5 border-t rounded-xl border-gray-800" />
          <div className=" mx-5">
            <div className=" flex flex-col">
              <div className="grid grid-cols-2">
                <div className=" w-full h-full pr-4">
                  <img
                    src={punkImg}
                    alt=""
                    className=" object-cover w-full h-full rounded-lg"
                  />
                </div>
                <div className=" ml-2 mt-2">
                  <h4 className=" text-sm text-slate-700 mb-3">
                    March 27, 2023
                  </h4>
                  <h2 className=" text-slate-200 font-semibold text-justify ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                    nesciunt atque similique sapiente sunt voluptas in expedita
                    repellat nihil assumenda.
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <hr className="mx-5 my-5 border-t rounded-xl border-gray-800" />
          <div className=" mx-5">
            <div className=" flex flex-col">
              <div className="grid grid-cols-2">
                <div className=" w-full h-full pr-4">
                  <img
                    src={punkImg}
                    alt=""
                    className=" object-cover w-full h-full rounded-lg"
                  />
                </div>
                <div className=" ml-2 mt-2">
                  <h4 className=" text-sm text-slate-700 mb-3">
                    March 27, 2023
                  </h4>
                  <h2 className=" text-slate-200 font-semibold text-justify ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                    nesciunt atque similique sapiente sunt voluptas in expedita
                    repellat nihil assumenda.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainGrid;
