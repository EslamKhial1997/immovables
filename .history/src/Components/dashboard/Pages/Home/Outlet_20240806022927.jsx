import React from "react";
import Aside from "./aside";

const Outlet = () => {
  return (
    <div>
      <Aside />
      <Outlet />
    </div>
  );
};

export default Outlet;
