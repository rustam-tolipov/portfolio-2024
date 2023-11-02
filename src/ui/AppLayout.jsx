import React from "react";
import { Outlet } from "react-router";

const AppLayout = () => {
  return (
    <div className="relative">
      <main className="bg-black">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
