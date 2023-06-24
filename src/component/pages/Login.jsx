// eslint-disable-next-line no-unused-vars
import React from "react";
import Button from "../Button";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";
import classNames from "../styles/Login.module.css";

function Login() {
  return (
    <>
      <h1>Create an account</h1>
      <div className={classNames.column}>
        <Illustration />
        <Form className={classNames.login}>
          <TextInput
            type="email"
            placeholder="Enter Email"
            icon="alternate_email"
          />

          <TextInput type="password" placeholder="Enter Password" icon="lock" />

          <Button>Submit Now</Button>

          <div className="info">
            {"Don't have account?"} <a href="login.html">Signup</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
}

export default Login;
