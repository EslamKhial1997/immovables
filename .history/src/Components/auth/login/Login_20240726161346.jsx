import React from "react";


import Profile from "../../../assets/auth/brand.jpg";
import auth from "../../../assets/auth/auth.png";
import Styles from "../Styles.module.css";

import { NavLink, Outlet } from "react-router-dom";
import LoginEmail from "./LoginEmail";

const Login = () => {
  return (
    <main className={`${Styles.main} grid grid-cols-3 gap-4`}>
      <div className="grid grid-cols-1 ">
        {" "}
        <section >
          <img src={Profile} alt="img" style={{maxHeight:""}}/>
        </section>
        <section className={Styles.sectionlogin}>
          <div className={Styles.parent}>
            <span className={Styles.started}>اهلا بك من جديد</span>

            <LoginEmail />
          </div>
        </section>
      </div>
      <div className=" col-span-2">
        <img src={auth} alt="" className="h-screen w-screen"/>
      </div>
    </main>
  );
};

export default Login;
