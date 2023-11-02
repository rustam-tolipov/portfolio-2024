import React, { useEffect } from "react";
import Welcome from "../features/home/Welcome";

const Home = () => {
  useEffect(() => {
    // console.log(window.scrollY);

    window.addEventListener("scroll", () => {
      // console.log(window.scrollY);
    });
  });

  return (
    <div className="h-screen w-screen">
      <Welcome />
      <section className="flex h-screen w-full snap-start items-center justify-center bg-slate-900">
        1
      </section>
      <section className="flex h-screen w-full snap-start items-center justify-center bg-slate-800">
        2
      </section>
      <section className="flex h-screen w-full snap-start items-center justify-center bg-slate-700">
        3
      </section>
    </div>
  );
};

export default Home;

// * Later use: snap-y snap-mandatory overflow-scroll
