import React from "react";

const Welcome = () => {
  return (
    <div className="flex h-screen w-full snap-start flex-col items-center justify-center gap-1 sm:gap-4">
      <h1 className="text-2xl font-extrabold text-gray-50 sm:text-7xl">
        Hi, I&apos;m Rustam Tolipov
      </h1>
      <h2 className="text-lg font-thin text-gray-50 sm:text-4xl">&</h2>
      <h2 className="text-lg font-thin text-gray-50 sm:text-4xl">
        Welcome to my portfolio
      </h2>
    </div>
  );
};

export default Welcome;
