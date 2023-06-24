// eslint-disable-next-line no-unused-vars
import React from "react";
import Question from "./Question";
import classNames from "./styles/Analysis.module.css";

function Analysis() {
  return (
    <div className={classNames.analysis}>
      <h1>Question Analysis</h1>
      <h4>You answerd 5 out of 10 questions correctly</h4>
      <Question />
    </div>
  );
}

export default Analysis;
