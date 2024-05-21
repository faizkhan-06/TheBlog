import React from "react";
import { useState } from "react";
import userImg from "../assets/images/user-img.jpg";
import { FiSearch } from "react-icons/fi";
import { IoIosSettings } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import Signin from "../pages/Signin";
import { IoMenu } from "react-icons/io5";

function Navbar() {
  const [isLogin, setIsLogin] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const closeForm = () => setIsFormVisible(false);
  const openForm = () => setIsFormVisible(true);
  return (
    <>
      {isLogin ? (
        <div className=" bg-gray-950 text-slate-200 flex justify-between items-center w-full min-h-[10vh] py-5">
          <div className=" flex items-center p-5">
            <img
              src={userImg}
              alt="user image"
              className=" max-w-10 min-h-10 rounded-full mx-4"
            />
            <span className=" text-sm font-semibold mx-4 text-gray-500">
              LEARN
            </span>
            <span className=" text-sm font-semibold mx-4 text-gray-500">
              BLOG
            </span>
            <span className=" text-sm font-semibold mx-4 text-gray-500">
              BOOKMARKS
            </span>
            <span className=" text-sm font-semibold mx-4 text-gray-500 ">
              MY BLOGS
            </span>
          </div>
          <div className=" p-5 flex justify-center items-center">
            <span className=" mx-4">
              <FiSearch className=" text-lg text-gray-500" />
            </span>
            <span className=" mx-4">
              <IoIosSettings className=" text-xl text-gray-500" />
            </span>
          </div>
        </div>
      ) : (
        <div className=" bg-gray-950 text-slate-200 flex justify-between items-center w-full min-h-[10vh] py-5 ">
          <div className=" flex items-center px-5">
            <span className="px-5">
              <FaRegUserCircle
                className=" mx-4 text-gray-500 text-xl hover:cursor-pointer hover:text-slate-200"
                onClick={openForm}
              />
            </span>
            <span className=" text-sm font-semibold mx-4 text-gray-500">
              LEARN
            </span>
            <span className=" text-sm font-semibold mx-4 text-gray-500">
              BLOG
            </span>
            <span className=" text-sm font-semibold mx-4 text-gray-500">
              BOOKMARKS
            </span>
            <span className=" text-sm font-semibold mx-4 text-gray-500 ">
              MY BLOGS
            </span>
          </div>
          <div className=" p-5 flex justify-center items-center">
            <span className=" mx-4">
              <FiSearch className=" text-lg text-gray-500" />
            </span>
            <span className=" mx-4">
              <IoIosSettings className=" text-xl text-gray-500" />
            </span>
          </div>
        </div>
      )}

      {isFormVisible && <Signin closeForm={closeForm} />}
    </>
  );
}

export default Navbar;
