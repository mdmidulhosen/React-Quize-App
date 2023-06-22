// eslint-disable-next-line no-unused-vars
import React from "react";
import Nav from "./Nav";
import classNames from "./styles/Layout.module.css";

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className={classNames.main}>
        <div className={classNames.container}>{children}</div>
      </main>
    </>
  );
}
