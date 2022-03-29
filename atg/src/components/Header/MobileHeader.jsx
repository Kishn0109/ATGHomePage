import React from "react";
import oval from "../../Assets/Header/Oval.png";
import Path from "../../Assets/Header/Path.png";
import Reactabgle from "../../Assets/Header/Rectangle.png";

function MobileHeader() {
  return (
    <div className="mobileHeader d-flex align-items-center d-md-none">
      <img src={Reactabgle} alt="rectangle" className="reactangle" />
      <img src={oval} alt="oval" className="Oval" />
      <img src={Path} alt="path" className="path" />
    </div>
  );
}

export default MobileHeader;
