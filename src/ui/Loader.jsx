import { useProgress } from "@react-three/drei";
import React from "react";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-xl">Pixels in progress...</p>
        <p className="text-2xl">{progress.toFixed(0)}</p>
      </div>
    </div>
  );
};

export default Loader;
