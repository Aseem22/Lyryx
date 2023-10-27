import React from "react";
import { FaSearch } from "react-icons/fa";
import "../styling/Searchbar.css";

function Searchbar() {
  return (
    <div id="search-bar">
      <input id="search-feed" placeholder=" Search..." value="" />
      <FaSearch id="search-icon" />
    </div>
  );
}

export default Searchbar;
