import React from "react";
import { Outlet } from "react-router";
import Model from "../canvas/Model";

const AppLayout = () => {
  return (
    <div className="relative scroll-smooth">
      <main className="absolute top-0 z-10">
        <Outlet />
      </main>

      <div className="fixed top-0 z-0 h-screen w-screen">
        <Model />
      </div>
    </div>
  );
};

export default AppLayout;
