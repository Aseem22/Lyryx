import React from "react";
import Musicslider from "./Musicslider";
import "../styling/Mainbar.css";

function Mainbar() {
  return (
    <div id="main-bar">
      <span id="music-header">Music</span>
      <Musicslider />
      <Musicslider />
      <Musicslider />
      <Musicslider />
    </div>
  );
}

export default Mainbar;
