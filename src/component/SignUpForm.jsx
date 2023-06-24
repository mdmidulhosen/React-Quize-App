// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import CheckBox from "./CheckBox";
import Form from "./Form";
import TextInput from "./TextInput";
import classNames from "./styles/SignUp.module.css";

function SignUpForm() {
  return (
    <Form className={classNames.signup}>
      <TextInput type="text" placeholder="Enter Name" icon="person" />

      <TextInput
        type="email"
        placeholder="Enter Email"
        icon="alternate_email"
      />

      <TextInput type="password" placeholder="Enter Password" icon="lock" />
      <TextInput
        type="password"
        placeholder="Confirm Password"
        icon="lock_clock"
      />

      <CheckBox text="I agree to the Terms &amp; Conditions" />

      <Button>Submit Now</Button>

      <div className="info">
        Already have an account? <Link to={"/login"}>Login</Link> instead.
      </div>
    </Form>
  );
}

export default SignUpForm;
