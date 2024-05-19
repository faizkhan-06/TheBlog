import React from "react";
import punkImg from "../assets/images/punk.jpg";

function BlogContent() {
  return (
    <>
      <div className=" flex flex-col px-4 text-gray-200">
        <h1 className=" text-2xl font-medium mb-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
          error adipisci eum eos voluptatum nisi?
        </h1>
        <img
          src={punkImg}
          alt="punk image"
          className=" w-2/3 mx-auto rounded-lg"
        />
        <p className=" text-base my-7">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
          consequuntur dolorem repellendus enim eius omnis laborum veniam odio
          quaerat itaque, expedita magnam quia nemo. Omnis debitis, nisi ut
          iusto quia odit perferendis obcaecati sunt excepturi reprehenderit
          mollitia sequi facilis quis aliquid earum cupiditate minima deleniti
          laboriosam, nemo non ex similique sed beatae temporibus. Enim neque
          blanditiis deleniti qui voluptas eaque repellat. Laborum quas repellat
          vel similique consequatur, autem, molestiae ab est, dolores labore
          magni dignissimos in debitis. Perferendis doloribus laboriosam et,
          molestiae praesentium dolor nesciunt impedit cupiditate unde ducimus
          quidem obcaecati similique aliquid labore ipsa rerum! Provident quidem
          commodi quis!
        </p>
      </div>
    </>
  );
}

export default BlogContent;
