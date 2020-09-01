import React from "react";
import moment from "moment";
import { showOptions, deleteMessage } from "../redux/chat/actions";
import store from "../redux/store";

export default function ChatMessage(props) {
  const {
    avatar,
    name,
    date,
    content,
    showOptions: showOptionsMessage
  } = props.messageObj;


  return (
    <li className="left clearfix">
      <span className="chat-img pull-left">
        <img src={avatar} alt="User Avatar" className="img-circle" />
      </span>
      <div className="chat-body clearfix">
        <div className="header">
          <strong className="primary-font">{name}</strong>{" "}
          <small
            className="pull-right text-muted"
            onClick={() => store.dispatch(showOptions(props.index))}
          >
            <span
              className="glyphicon glyphicon-menu menu"
              style={{ marginLeft: "3px" }}
            >
              ...
            </span>
          </small>
          <small className="pull-right text-muted">
            <span className="glyphicon glyphicon-time"></span>
            {moment(date).format("LT")}
          </small>
        </div>
        <p>{content}</p>
      </div>
      {showOptionsMessage ? (
        <div className="options">
          <ul>
            <li onClick={(e) => store.dispatch(deleteMessage(props.index))}>
              Borrar mensaje
            </li>
          </ul>
        </div>
      ) : null
      }
    </li>
)}
  
