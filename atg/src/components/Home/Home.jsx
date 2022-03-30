import React from "react";
import Post from "../Posts/Post";
import HomeNav from "./HomeNav";
import CreateIcon from "@mui/icons-material/Create";
function Home() {
  return (
    <div>
      <HomeNav />
      <Post />
      <div className="wrightpostInMobile bg-primary d-lg-none d-md-none ">
        <CreateIcon />
      </div>
    </div>
  );
}

export default Home;
