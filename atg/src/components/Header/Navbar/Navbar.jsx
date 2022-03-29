import React from "react";
import "./navbar.css";
import Union from "../../../Assets/Header/Union1.png";
// import { Container } from "react-bootstrap";
import SearchIcon from "@mui/icons-material/Search";
function Navbar() {
  return (
    <div className="Navbar d-none  d-md-flex d-lg-flex justify-content-between align-items-center py-sm-3">
      <div className="navlogo">
        <span className="Atg">ATG.</span>
        <span>W</span>

        <img src={Union} alt="O" />

        <span>RLD</span>
      </div>
      <div className="navinput">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search for your favorite groups in ATG"
        />
      </div>
      <div className="navAuthentication">
        Create account. <a href="#"> It’s free!</a>
      </div>
    </div>
  );
}

export default Navbar;
