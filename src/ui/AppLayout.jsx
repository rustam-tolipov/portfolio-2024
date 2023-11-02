import React from "react";

import { Outlet } from "react-router";

const AppLayout = () => {
  return (
    <main className="bg-black">
      <Outlet />
    </main>
  );
};

export default AppLayout;
