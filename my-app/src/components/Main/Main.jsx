import React from "react";
import Logo from "./Logo/Logo";
import "./Main.scss";

function Main() {
  const base = `page`;
  return (
    <div className={`${base}`}>
      <div className={`${base}_box-1`}>
        <Logo />
        <div className={`${base}_navigation`}>
          <a className="a-1" href="#">
            Popular offices
          </a>
          <a className="a-2" href="#">
            About company
          </a>
          <a className="a-3" href="#">
            Office showreel
          </a>
          <a className="a-4" href="#">
            Contact
          </a>
        </div>
      </div>

      <div className={`${base}_mainImg`}></div>
      <div></div>
    </div>
  );
}

export default Main;
