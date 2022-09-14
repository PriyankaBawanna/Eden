import { Outlet, Link } from "react-router-dom";
import React from "react";
import StepOne from "../Shared/StepOne.svg";
import stepTwo from "../Shared/stepTwo.svg";
import stepThree from "../Shared/stepThree.svg";
import stepFour from "../Shared/stepFour.svg";
const Header = () => {
  return (
    <>
      <div className="eden">
        <h3 className="heading">
          <b>Eden</b>
        </h3>
      </div>
      <nav className="headerPage">
        <Link to="/">
          <img src={StepOne} className="stepFirst " />
        </Link>
        <div className="line"></div>
        <Link to="/SecondPage">
          <img src={stepTwo} className="stepFirst" />
        </Link>
        <div className="line"></div>
        <Link to="/Planning">
          <img src={stepThree} className="stepFirst" />
        </Link>
        <div className="line"></div>
        <Link to="/CongratulationsPage">
          <img src={stepFour} className="stepFirst" />
        </Link>
      </nav>
      <Outlet />
    </>
  );
};
export default Header;
