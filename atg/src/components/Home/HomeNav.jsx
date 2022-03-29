import React from "react";
import "./HomeNav.css";
function HomeNav() {
  const list = (name, count, isactive) => {
    return (
      <div className={`list ${isactive == true && "active"}`}>
        <span>{name}</span>
        <span>{count > 0 && "(" + count + ")"}</span>
      </div>
    );
  };
  return (
      <div className="navigation position-relative">
      <div className="navigationleft">
        {list("All Posts", 32, true)}
        {list("Articals", 0, false)}
        {list("Event", 0, false)}
        {list("Education", 0, false)}
        {list("Job", 0, false)}
      </div>
      <div className="navigationright"></div>
    </div>
  );
}

export default HomeNav;
