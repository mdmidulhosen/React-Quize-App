// eslint-disable-next-line no-unused-vars
import React from "react";
import Button from "./Button";
import classNames from "./styles/ProgressBar.module.css";

function ProgressBar() {
  return (
    <div className={classNames.progressBar}>
      <div className={classNames.backButton}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className={classNames.rangeArea}>
        <div className={classNames.tooltip}>24% Cimplete!</div>
        <div className={classNames.rangeBody}>
          <div className={classNames.progress} style={{ width: "20%" }}></div>
        </div>
      </div>
      <a href="result.html">
        <Button className={classNames.next}>
          <span>Next Question</span>
          <span className="material-icons-outlined"> arrow_forward </span>
        </Button>
      </a>
    </div>
  );
}

export default ProgressBar;
