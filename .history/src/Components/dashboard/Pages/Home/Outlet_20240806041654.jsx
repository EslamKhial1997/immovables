import React from "react";
import Aside from "./aside";
import { Outlet } from "react-router-dom";
const OutletDashboard = () => {
  return (
    <div className="grid grid-cols-12 grid-flow-col gap-4">
      <div className="col-span-3">
        {" "}
        <Aside />
      </div>
      <div className="col-span-8">
        {" "}
        <Outlet />
      </div>
    </div>
  );
};

export default OutletDashboard;
