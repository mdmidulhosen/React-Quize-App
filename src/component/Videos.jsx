// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import Video from "./Video";
import classNames from "./styles/Videos.module.css";

function Videos() {
  return (
    <div className={classNames.videos}>
      <Link to={"/quize"}>
        <Video />
      </Link>
      <Link to={"/quize"}>
        <Video />
      </Link>
      <Link to={"/quize"}>
        <Video />
      </Link>
      <Link to={"/quize"}>
        <Video />
      </Link>
      <Link to={"/quize"}>
        <Video />
      </Link>
      <Link to={"/quize"}>
        <Video />
      </Link>
      <Link to={"/quize"}>
        <Video />
      </Link>
      <Link to={"/quize"}>
        <Video />
      </Link>
    </div>
  );
}

export default Videos;
