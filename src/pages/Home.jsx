import React from "react";
import Welcome from "../features/home/Welcome";

const Home = () => {
  return (
    <div className="relative h-screen w-screen">
      <Welcome />
      <section className="flex h-screen w-full snap-start items-center justify-center">
        1
      </section>
      <section className="flex h-screen w-full snap-start items-center justify-center">
        2
      </section>
      <section className="flex h-screen w-full snap-start items-center justify-center">
        3
      </section>
    </div>
  );
};

export default Home;

// * Later use: snap-y snap-mandatory overflow-scroll
