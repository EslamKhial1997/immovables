import React from "react";
import Aside from "./aside";
import { Outlet } from "react-router-dom";
const OutletDashboard = () => {
  return (
    <div>
     <div> <Aside /></div>
     <div> <Outlet /></div>
    </div>
  );
};

export default OutletDashboard;
