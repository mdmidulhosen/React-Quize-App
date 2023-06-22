// eslint-disable-next-line no-unused-vars
import React from "react";
import threeImage from "../assets/images/3.jpg";
import classNames from "./styles/Video.module.css";

function Video() {
  return (
    <a href="quiz.html">
      <div className={classNames.video}>
        <img src={threeImage} alt="Video Title" />
        <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        <div className={classNames.qmeta}>
          <p>10 Questions</p>
          <p>Score : Not taken yet</p>
        </div>
      </div>
    </a>
  );
}

export default Video;
