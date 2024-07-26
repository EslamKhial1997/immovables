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
       <button>الصفحة الارئيسية</button>
      <Outlet />
    </div>
  );
};

export default Auth;
