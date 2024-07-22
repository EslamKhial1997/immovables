import React from "react";

import Profile from "../../../assets/auth/profileLogin.svg" ;
import Styles from "../Styles.module.css";

import { NavLink, Outlet } from "react-router-dom";
import LoginEmail from "./LoginEmail";


const Login = () => {
  
  return (
    <main className={Styles.main}>
      <section className={Styles.sectionimg}>
        <img src={Profile} alt="img" />
      </section>
      <section className={Styles.sectionlogin}>
        <div className={Styles.parent}>
          <div className={Styles.btnparent}>
            <NavLink className={`${Styles.login} ${Styles.active}`} to="/auth">
              Login
            </NavLink>
            <NavLink to="/auth/signup" className={Styles.login}>
              Sign up
            </NavLink>
          </div>
          <span className={Styles.started}></span>
        
      <LoginEmail/>
        </div>
      </section>
    </main>
  );
};

export default Login;
