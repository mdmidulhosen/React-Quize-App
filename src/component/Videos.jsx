// eslint-disable-next-line no-unused-vars
import React from "react";
import Video from "./Video";
import classNames from "./styles/Videos.module.css";

function Videos() {
  return (
    <div className={classNames.videos}>
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
    </div>
  );
}

export default Videos;
