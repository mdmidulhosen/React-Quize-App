// eslint-disable-next-line no-unused-vars
import React from "react";
import classNames from "./styles/TextInput.module.css";

// eslint-disable-next-line react/prop-types
function TextInput({ icon, type, placeholder }) {
  return (
    <div className={classNames.textInput}>
      <input type={type} placeholder={placeholder} />
      <span className="material-icons-outlined"> {icon} </span>
    </div>
  );
}

export default TextInput;
