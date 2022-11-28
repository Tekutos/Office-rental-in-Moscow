import React from "react";
import SocialMedia from "../SocialMedia/SocialMedia";
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
        <span className={`${base}_span-1`}>#49 AMONG BROKERS</span>
        <span className={`${base}_span-2`}>Office rental in Moscow</span>
        <div className={`${base}_catalog`}>
          <span className={`${base}_span-3`}>Go to the catalog</span>
          <div className={`${base}_ellipse`}></div>
          <div className={`${base}_arrow`}>
            <i className="arrow right"></i>
          </div>
        </div>
        <span className={`${base}_span-4`}>News</span>
        <span className={`${base}_span-5`}>
          A new skyscraper "825 Third Ave" with 37 offices has been added to our
          portfolio ...
        </span>
        <SocialMedia />
      </div>
      <div className={`${base}_mainImg`}></div>
      <div className={`${base}_rentalConditions`}></div>
      <div className={`${base}_text1`}>Fair rental conditions</div>
      <div className={`${base}_text2`}>
        Rent an office for several months or several years without long-term
        obligations and commissions
      </div>
    </div>
  );
}

export default Main;
