import React from "react";
import Aside from "./aside";
import { Outlet } from "react-router-dom";
const Outlet = () => {
  return (
    <div>
      <Aside />
      <Outlet />
    </div>
  );
};

export default Outlet;
