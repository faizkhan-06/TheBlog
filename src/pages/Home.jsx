import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import MainGrid from "../components/MainGrid";
import SecondGrid from "../components/SecondGrid";

function Home() {
  return (
    <>
      <section>
        <div className=" bg-gray-950 min-h-full">
          <Navbar />
          <Banner />
          <MainGrid />
        </div>
      </section>
      <section>
        <div className=" bg-slate-50 min-h-full">
          <SecondGrid />
        </div>
      </section>
    </>
  );
}

export default Home;
