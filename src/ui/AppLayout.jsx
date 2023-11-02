import React from "react";

import { Outlet } from "react-router";


const AppLayout = () => {
  return (
    <div className="">
      <main className="h-[94dvh] sm:h-full overflow-scroll">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
