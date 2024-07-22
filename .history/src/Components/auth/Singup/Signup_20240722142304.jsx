import React from "react";
import Profile from "../../../" "../image/profileLogin.svg";


import { NavLink } from "react-router-dom";
import RegEmail from "./RegEmail";
import Styles from "../Styles.module.css";

const Signup = () => {
  return (
    <main className={Styles.main}>
      <section className={Styles.sectionimg}>
        <img src={Profile} alt="img" />
      </section>
      <section className={Styles.sectionlogin}>
        <div className={Styles.parent}>
          <div className={Styles.btnparent}>
            <NavLink to="/login" className={`${Styles.login}`}>
              Login
            </NavLink>
            <button className={`${Styles.login} ${Styles.active}`}>
              Sign up
            </button>
          </div>
          
          <span className={Styles.started}>Let's Get Started</span>
       

          <RegEmail />
        </div>
      </section>
    </main>
  );
};

export default Signup;
