// eslint-disable-next-line no-unused-vars
import React from "react";
import Illustration from "../Illustration";
import SignUpForm from "../SignUpForm";
import classNames from "../styles/SignUp.module.css";

function SignUp() {
  return (
    <>
      <h1>Create an account</h1>
      <div className={classNames.column}>
        <Illustration />
        <SignUpForm />
      </div>
    </>
  );
}

export default SignUp;
