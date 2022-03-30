import React from "react";
import "./header.css";
import MobileHeader from "./MobileHeader";
import Navbar from "./Navbar/Navbar";
import rec from "../../Assets/Header/Rectangle2.png"
import LogoutIcon from "@mui/icons-material/Logout";
function Header() {
  return (
    <div>
      <MobileHeader />
      <Navbar />
      <div className="headerHome position-relative">
        <div className="d-block d-lg-none d-md-none exitweb position-absolute">
          <LogoutIcon />
        </div>
        <div className="signupheader position-absolute d-block d-lg-none d-md-none">
          Sign Up
        </div>
        <img src={rec} alt="" />
        <div className="content text-start">
          <h1>Computer Engineering</h1>
          <span>142,765 Computer Engineers follow this</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
