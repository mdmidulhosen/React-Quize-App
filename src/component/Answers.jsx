// eslint-disable-next-line no-unused-vars
import React from "react";
import CheckBox from "./CheckBox";
import classNames from "./styles/Answers.module.css";

function Answers() {
  return (
    <div className={classNames.Answers}>
      <CheckBox className={classNames.answer} text="test answers" />
    </div>
  );
}

export default Answers;
