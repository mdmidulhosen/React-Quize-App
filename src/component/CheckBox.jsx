// eslint-disable-next-line no-unused-vars
import React from "react";

function CheckBox(text, ...rest) {
  return (
    <label>
      <input type="checkbox" {...rest} />
      <span>{text}</span>
    </label>
  );
}

export default CheckBox;
