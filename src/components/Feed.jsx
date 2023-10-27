import React from "react";
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Mainbar from "./Mainbar";
import "../styling/Feed.css";

function Feed() {
  return (
    <div className="feed">
      <Sidebar />
      <Mainbar />
    </div>
  );
}

export default Feed;
