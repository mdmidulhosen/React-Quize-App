// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
function CheckBox({ text, className }) {
  return (
    <label className={className}>
      <input type="checkbox" />
      <span>{text}</span>
    </label>
  );
}

export default CheckBox;
