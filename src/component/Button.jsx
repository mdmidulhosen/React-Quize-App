// eslint-disable-next-line no-unused-vars
import React from "react";
import classNames from "./styles/Button.module.css";

function Button(children) {
  return (
    <div className={classNames.button}>
      <span>{children}</span>
    </div>
  );
}

export default Button;
