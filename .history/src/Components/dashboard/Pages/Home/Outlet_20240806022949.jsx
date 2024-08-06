import React from "react";
import Aside from "./aside";
import { Outlet } from "react-router-dom";
const OutletDash = () => {
  return (
    <div>
      <Aside />
      <Outlet />
    </div>
  );
};

export default Outlet;
