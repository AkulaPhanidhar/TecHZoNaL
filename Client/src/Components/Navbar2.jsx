import React from "react";
import "./Navbar2.css";

const Navbar2 = () => {
  return (
    <div className="Navbar2">
      <div className="div1">
        <div className="filter"></div>
      </div>
      <div className="div2">
        <input placeholder="Search" type="text" className="Lsearch" />
        <div className="Rsearch"></div>
      </div>
      <div className="div3">
        <button className="Cbut">Compare</button>
      </div>
    </div>
  );
};

export default Navbar2;
