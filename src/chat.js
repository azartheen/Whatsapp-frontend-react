import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import React from "react";
import "./Chat.css";
import MicIcon from "@material-ui/icons/Mic";
function chat() {
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar />
        <div className="chatheader_info">
          <h3>Room name</h3>
          <p>Last seen at ...</p>
        </div>
        <div className="chatheader_right">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat_body">
        <p className="chat_message">
          <span className="chat_name">message</span>
          <span classname="chat_timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat_message chat_recieved">
          <span className="chat_name">message</span>
          <span classname="chat_timestamp">{new Date().toUTCString()}</span>
        </p>
      </div>
      <div className="chat_footer">
        <InsertEmoticonIcon />
        <form>
          <input placeholder="type a message" type="text" />
          <button type="submit">send</button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default chat;
