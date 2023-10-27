import React from "react";
import Searchbar from "./Searchbar";
import "../styling/Header.css";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://thumbs.dreamstime.com/b/black-music-media-players-logo-symbols-template-icons-app-149499733.jpg"
          alt="logo"
        />
      </div>
      <Searchbar />
    </div>
  );
}

export default Header;
