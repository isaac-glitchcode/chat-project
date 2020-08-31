import React from "react";
import Message from "./chat_message";
import TextArea from "./chat_textarea";
import store from "../redux/store";

export default function ChatContainer() {
  const { messages } = store.getState().ChatReducer;
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <div className="panel panel-primary">
            <div className="panel-heading" id="accordion">
              <span className="glyphicon glyphicon-comment"></span> Chat
            </div>
            <div className="panel-collapse collapse in" id="collapseOne">
              <div className="panel-body">
                <ul className="chat">
                  {messages.map((message, index) => {
                    return <Message messageObj={message} index={index} />;
                  })}
                </ul>
              </div>
              <div className="panel-footer">
                <TextArea />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}