// eslint-disable-next-line no-unused-vars
import React from "react";
import classNames from "./styles/TextInput.module.css";

function TextInput(icon, ...rest) {
  return (
    <div className={classNames.textInput}>
      <input {...rest} />
      <span className="material-icons-outlined"> {icon} </span>
    </div>
  );
}

export default TextInput;
