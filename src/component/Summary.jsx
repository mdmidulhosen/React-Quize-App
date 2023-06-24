// eslint-disable-next-line no-unused-vars
import React from "react";
import image from "../assets/images/success.png";
import classNames from "./styles/Summary.module.css";

function Summary() {
  return (
    <div className={classNames.summary}>
      <div className={classNames.point}>
        <p className={classNames.score}>
          Your score is <br />5 out of 10
        </p>
      </div>

      <div className={classNames.badge}>
        <img src={image} alt="Success" />
      </div>
    </div>
  );
}

export default Summary;
