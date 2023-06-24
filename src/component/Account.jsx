// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import classNames from "./styles/Account.module.css";

const Account = () => {
  return (
    <div className={classNames.account}>
      <span className="material-icons-outlined" title="Account">
        account_circle
      </span>
      <Link to={"/signup"}>Signup</Link>
      <Link to={"/login"}>Login</Link>
    </div>
  );
};

export default Account;
