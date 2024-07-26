import React from "react";
import { Outlet } from "react-router-dom";
import background from "../../assets/available/image3.jpg";
const Auth = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        height: "100vh",
        backgroundRepeat: "no-repeat",
      }}
    >
       <button className="fixed z-40 top-5 left-5 bg-gray-800 text- rounded-md p-3">الصفحة الرئيسيه</button>
      <Outlet />
    </div>
  );
};

export default Auth;
