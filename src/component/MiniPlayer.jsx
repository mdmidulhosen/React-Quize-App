// eslint-disable-next-line no-unused-vars
import React from "react";
import image from "../assets/images/3.jpg";
import classNames from "./styles/MiniPlayer.module.css";

function MiniPlayer() {
  return (
    <div className={`${classNames.miniPlayer} ${classNames.floatingBtn}`}>
      <span className={`material-icons-outlined ${classNames.open}`}>
        {" "}
        play_circle_filled{" "}
      </span>
      <span className={`material-icons-outlined ${classNames.close}`}>
        {" "}
        close{" "}
      </span>
      <img src={image} alt="alt tag" />
      <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
    </div>
  );
}

export default MiniPlayer;
