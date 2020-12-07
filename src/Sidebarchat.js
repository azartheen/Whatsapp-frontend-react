import React from "react";
import "./Sidebarchat.css";
import { Avatar } from "@material-ui/core";

function Sidebarchat() {
  return (
    <div className="sidebarchat_color">
      <div className="sidebarchat">
        <Avatar />
        <div className="sidebar_info">
          <h2>Room name</h2>
          <p>This is the last message</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebarchat;
