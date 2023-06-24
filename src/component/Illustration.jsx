// eslint-disable-next-line no-unused-vars
import React from "react";
import SignUpImage from "../assets/images/signup.png";
import classNames from "./styles/Illustration.module.css";

export default function Illustration() {
  return (
    <div className={classNames.illustration}>
      <img src={SignUpImage} alt="Signup" />
    </div>
  );
}

// export default Illustration;
