// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import LogoBg from "../assets/images/logo-bg.png";
import Account from "./Account";
import classNames from "./styles/Nav.module.css";

const Nav = () => {
  return (
    <nav className={classNames.nav}>
      <ul>
        <li>
          <Link to={"/"} className={classNames.brand}>
            <img src={LogoBg} alt="Learn with Sumit Logo" />
            <h3>Learn with Sumit</h3>
          </Link>
        </li>
      </ul>
      <Account />
    </nav>
  );
};

export default Nav;
