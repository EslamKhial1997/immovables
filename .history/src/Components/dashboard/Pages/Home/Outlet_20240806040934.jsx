import React from "react";
import Aside from "./aside";
import { Outlet } from "react-router-dom";
const OutletDashboard = () => {
  return (
    <div>
     <div clas> <Aside /></div>
     <div clas> <Outlet /></div>
    </div>
  );
};

export default OutletDashboard;
