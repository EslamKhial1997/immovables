import React from "react";
import Aside from "./aside";
import { Outlet } from "react-router-dom";
const OutletDashboard = () => {
  return (
    <div className="grid grid-cols-12 grid-flow-col gap-1">
      <div className="col-span-3 bg-g">
        {" "}
        <Aside />
      </div>
      <div className="col-span-9 bg-black">
        {" "}
        <Outlet />
      </div>
    </div>
  );
};

export default OutletDashboard;
