// eslint-disable-next-line no-unused-vars
import React from "react";
import classNames from "./styles/Form.module.css";

// eslint-disable-next-line react/prop-types, no-unused-vars
function Form({ children, className, ...rest }) {
  return (
    <form className={`${className} ${classNames.form}`} action="#" {...rest}>
      {children}
    </form>
  );
}

export default Form;
