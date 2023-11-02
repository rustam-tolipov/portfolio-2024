import React from "react";
import Welcome from "../features/home/Welcome";

const Home = () => {
  return (
    <div className="h-screen w-screen snap-y snap-mandatory overflow-scroll">
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
