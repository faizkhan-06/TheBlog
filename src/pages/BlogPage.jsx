import React from "react";
import Navbar from "../components/Navbar";
import BlogUserBox from "../components/BlogUserBox";
import BlogContent from "../components/BlogContent";
import punkImg from "../assets/images/punk.jpg";
import BlogSidebar from "../components/BlogSidebar";
function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        <div className=" flex  bg-gray-950">
          <div className=" w-3/4 min-h-screen px-10 ">
            <BlogUserBox />
            <BlogContent />
          </div>
          <div className="w-3/12  p-4">
            <BlogSidebar />
          </div>
        </div>
      </main>
    </>
  );
}

export default BlogPage;
