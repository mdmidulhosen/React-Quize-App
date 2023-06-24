// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
function CheckBox({ text }) {
  return (
    <label>
      <input type="checkbox" />
      <span>{text}</span>
    </label>
  );
}

export default CheckBox;
