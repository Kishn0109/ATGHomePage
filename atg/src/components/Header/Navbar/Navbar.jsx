import React from "react";
import "./navbar.css";
import Union from "../../../Assets/Header/Union1.png";
// import { Container } from "react-bootstrap";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import Img from "../../../Assets/Header/Rectangle2.png";
function Navbar() {
  const [show, setShow] = useState(false);
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-signinSignup"
      >
        <Modal.Header closeButton className="modelheader">
          <Modal.Title
            id="contained-modal-title-vcenter"
            style={{ fontSize: "1rem" }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
            deserunt
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="row">
          <div className="col-12 col-md-12 col-lg-6 left col-sm-12">
            <div className="body-title">Create Account</div>
            <div className="input">
              <div className="name d-flex">
                <input
                  type="text"
                  className="firstName"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  className="lastName"
                  placeholder="Last Name"
                />
              </div>
              <input type="email" className="email" placeholder="Email" />
              <input
                type="password"
                className="password"
                placeholder="Password"
              />
              <input
                type="text"
                className="confirm password"
                placeholder="Confirm Password"
              />
            </div>
            <div className="buttons">
              <button className="Account">Create Account</button>
              <div className="linksignin d-lg-none">
                Already Have an account? <a href="#">Sign In</a>
              </div>
              <button className="pfacebookAuthentication">
                <FacebookIcon /> Sign up with Fackbook
              </button>
              <button className="googleAuthentication">
                <GoogleIcon /> Sign up with Google
              </button>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6 right d-none d-lg-flex">
            <div className="body-title">
              Already Have an account? <a href="#">Sign In</a>
            </div>
            <div className="img">
              <img src={Img} alt="" />
            </div>
            <div className="footer">Lorem ipsum dolor sit amet consectetur</div>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
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
        Create account.{" "}
        <a href="#" onClick={() => setShow(true)}>
          It’s free!
        </a>
      </div>
      <MyVerticallyCenteredModal show={show} onHide={() => setShow(false)} />
    </div>
  );
}

export default Navbar;
