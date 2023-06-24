// eslint-disable-next-line no-unused-vars
import React from "react";
import Answers from "./Answers";
import classNames from "./styles/Question.module.css";

function Question() {
  return (
    <div className={classNames.question}>
      <div className={classNames.qtitle}>
        <span className="material-icons-outlined"> help_outline </span>
        Here goes the question from Learn with Sumit?
      </div>
      <Answers />
    </div>
  );
}

export default Question;
