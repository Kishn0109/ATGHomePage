import React from "react";
import { Card, Button } from "react-bootstrap";
import Rectangle2 from "../../Assets/Header/Rectangle2.png";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CloseIcon from "@mui/icons-material/Close";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import HomeNav from "../Home/HomeNav";
import "./post.css";
function Post() {
  const styles = {
    customButton: {
      backgroundColor: "#0B0C10",
      borderColor: "#45A293",
      color: "#45A293",
      borderRadius: "100px",
    },
    customcard: {
      height: "500px",
      margin: "1rem 0rem",
    },
    cardtext: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      margin: "0",
      width: "100%",
    },
  };
  const recommendedgroup = (link, Name) => {
    return (
      <div className="Rgroup">
        <div>
          <img src={Rectangle2} alt="logo" />
          {Name}
        </div>
        <div className="followbtn">Follow</div>
      </div>
    );
  };
  return (
    <div className="d-flex container-fluid container-md container-lg justify-content-sm-center">
      <div className="activity cards">
        <Card style={styles.customcard}>
          <Card.Img variant="top" src={Rectangle2} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text className="topic" style={styles.cardtext}>
              <p>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <MoreVertIcon />
            </Card.Text>
            <p className="description">
              I’ve worked in UX for the better part of a decade. From now on, I
              plan to rei…
            </p>
            <div className="info">
              <div className="left">
                {/* <div className="cardlogo"> */}
                <img src={Rectangle2} alt="" />
                {/* </div> */}
                <span>Sarthak Kumar</span>
              </div>
              <div className="right">
                1.4k view
                <div className="shareDIv">
                  <ShareIcon />
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
        <Card style={styles.customcard}>
          <Card.Img variant="top" src={Rectangle2} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text className="topic" style={styles.cardtext}>
              <p>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <MoreVertIcon />
            </Card.Text>
            <p className="description">
              I’ve worked in UX for the better part of a decade. From now on, I
              plan to rei…
            </p>
            <div className="info">
              <div className="left">
                {/* <div className="cardlogo"> */}
                <img src={Rectangle2} alt="" />
                {/* </div> */}
                <span>Sarthak Kumar</span>
              </div>
              <div className="right">
                1.4k view
                <div className="shareDIv">
                  <ShareIcon />
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className="join-group d-none d-md-block d-lg-block">
        <div className="inputlocation">
          <LocationOnIcon />
          <input type="text" />
          <CloseIcon />
        </div>
        <div className="taypograp"></div>
        <div className="recomdation-group">
          <h3>
            <ThumbUpIcon />
            RECOMMENDED GROUPS
          </h3>
          {recommendedgroup("link", "Kishan Lal Rai")}
          {recommendedgroup("link", "Nikhil  Rai")}
          {recommendedgroup("link", "Kishan")}
          {recommendedgroup("link", "Amresh Verma")}
        </div>
      </div>
    </div>
  );
}

export default Post;
