import React from "react";
import "./HomeNav.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GroupIcon from "@mui/icons-material/Group";
function HomeNav() {
  const list = (name, count, isactive) => {
    return (
      <div className={`list ${isactive == true && "active"}`}>
        <span>{name}</span>
        <span>{count > 0 && "(" + count + ")"}</span>
      </div>
    );
  };
  const style = {
    custombutton: {
      fontWeight: "bold",
      border: "none",
      outline: "none",
      border: "1px solid transparent",
      padding: "0.375rem 0.75rem",
      borderRradius: "0.25rem",
      backgroundColor: "#d3d3d38a",
      borderRadius: "0.4rem",
    },
  };
  return (
    <div className="navigationwraper bg-light d-none d-md-flex d-lg-flex justify-content-center w-100">
      <div className="navigation container-fluid container-md container-lg">
        <div className="navigationleft">
          {list("All Posts", 32, true)}
          {list("Articals", 0, false)}
          {list("Event", 0, false)}
          {list("Education", 0, false)}
          {list("Job", 0, false)}
        </div>
        <div className="navigationright">
          <button className="gray mx-1" style={style.custombutton}>
            Write a Post <ExpandMoreIcon />
          </button>
          <button
            className="bg-primary text-white m-0"
            style={style.custombutton}
          >
            <GroupIcon /> Join Group
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeNav;
