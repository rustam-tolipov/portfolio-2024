import React from "react";
import Welcome from "../features/home/Welcome";

const Home = () => {
  return (
    <div className="relative h-screen w-screen">
      <Welcome />

      {Array.from({ length: 13 }).map((_, index) => (
        <section
          key={index}
          className="flex h-screen w-full snap-start items-center justify-center"
        >
          {index}
        </section>
      ))}
    </div>
  );
};

export default Home;

// * Later use: snap-y snap-mandatory overflow-scroll
