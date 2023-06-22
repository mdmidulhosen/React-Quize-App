// eslint-disable-next-line no-unused-vars
import React from "react";
import LogoBg from "../assets/images/logo-bg.png";
import Account from "./Account";
import classNames from "./styles/Nav.module.css";

const Nav = () => {
  return (
    <nav className={classNames.nav}>
      <ul>
        <li>
          <a href="#" className={classNames.brand}>
            <img src={LogoBg} alt="Learn with Sumit Logo" />
            <h3>Learn with Sumit</h3>
          </a>
        </li>
      </ul>
      <Account />
    </nav>
  );
};

export default Nav;
