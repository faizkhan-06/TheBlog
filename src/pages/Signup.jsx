import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import Signin from "./Signin";

function Signup({ closeForm }) {
  const [isPassVisible, setIsPassVisible] = useState(false);
  const [isSignin, setIsSignin] = useState(false);
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  return (
    <>
      {!isSignin ? (
        <div className=" fixed inset-0 bg-opacity-75  bg-gray-950 min-h-screen flex justify-center items-center">
          <div className=" text-gray-200 flex justify-center items-center">
            <form action="/signIn" method="post">
              <div className=" bg-black border-2 border-gray-900 p-12 rounded-md relative">
                <IoIosClose
                  className="text-red-500 absolute top-4 right-4 text-3xl hover:cursor-pointer hover:text-red-700"
                  onClick={closeForm}
                />
                <h1 className=" my-3 text-center text-xl font-Poppins font-extrabold">
                  THE BLOG
                </h1>
                <h2 className=" my-2 text-center text-4xl">Sign up</h2>
                <div className=" my-3">
                  <h5 className=" text-sm text-center text-gray-500">
                    Enter your details below to create your account and get
                    started
                  </h5>
                </div>

                <div className="mt-3 mb-6 flex justify-center items-center gap-2 border-2 border-gray-900 rounded-lg py-2 px-10 hover:bg-gray-900 hover:cursor-pointer">
                  <FcGoogle />
                  <h5 className=" text-sm text-center">Continue with Google</h5>
                </div>
                <div className="flex flex-col items-center space-y-4">
                  <div className="flex items-center border-2 border-gray-900 py-2 px-4 rounded-xl w-80">
                    <HiOutlineMail className="text-xl text-gray-500 mr-2" />
                    <input
                      type="email"
                      className="border-none text-gray-400 text-lg bg-transparent focus:outline-none flex-grow"
                      placeholder="enter email..."
                    />
                  </div>
                  <div className="flex items-center border-2 border-gray-900 py-2 px-4 rounded-xl w-80">
                    <RiLockPasswordLine className="text-xl text-gray-500 mr-2" />
                    <input
                      type={isPassVisible ? "text" : "password"}
                      className="border-none text-gray-400 text-lg bg-transparent focus:outline-none flex-grow"
                      placeholder="enter password..."
                    />
                    {isPassVisible ? (
                      <FaEyeSlash
                        className="text-lg text-gray-500 hover:text-gray-300 hover:cursor-pointer ml-2"
                        onClick={() => setIsPassVisible(!isPassVisible)}
                      />
                    ) : (
                      <FaEye
                        className="text-lg text-gray-500 hover:text-gray-300 hover:cursor-pointer ml-2"
                        onClick={() => setIsPassVisible(!isPassVisible)}
                      />
                    )}
                  </div>
                  <div className="flex items-center border-2 border-gray-900 py-2 px-4 rounded-xl w-80">
                    <RiLockPasswordLine className="text-xl text-gray-500 mr-2" />
                    <input
                      type={isPassVisible ? "text" : "password"}
                      className="border-none text-gray-400 text-lg bg-transparent focus:outline-none flex-grow"
                      placeholder="confirm password..."
                    />
                    {isPassVisible ? (
                      <FaEyeSlash
                        className="text-lg text-gray-500 hover:text-gray-300 hover:cursor-pointer ml-2"
                        onClick={() => setIsPassVisible(!isPassVisible)}
                      />
                    ) : (
                      <FaEye
                        className="text-lg text-gray-500 hover:text-gray-300 hover:cursor-pointer ml-2"
                        onClick={() => setIsPassVisible(!isPassVisible)}
                      />
                    )}
                  </div>
                  <button className="  border-2 border-gray-900 py-2 px-10 text-center text-sm rounded-2xl hover:bg-gray-900 hover:border-gray-800 hover:font-semibold ">
                    Signup
                  </button>
                  <h5 className=" text-sm text-gray-500">
                    Already have an account?{" "}
                    <span
                      className=" text-blue-500 underline hover:cursor-pointer"
                      onClick={() => setIsSignin(true)}
                    >
                      Login
                    </span>
                  </h5>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <Signin closeForm={closeForm} />
      )}
    </>
  );
}

export default Signup;
