import React from "react";
import Logo from "./Logo/Logo";
import "./Main.scss";

function Main() {
  const base = `page`;
  return (
    <div className={`${base}`}>
      <Logo></Logo>
      <div className={`${base}_mainImg`}></div>
      <div></div>
    </div>
  );
}

export default Main;
