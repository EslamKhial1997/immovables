import React from "react";
import Aside from "./aside";
import { Outlet } from "react-router-dom";
const OutletDashboard = () => {
  return (
    <div className="grid grid-rows-1">
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
