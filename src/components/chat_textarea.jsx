import React,{useEffect} from "react";
import store from "../redux/store";
import { setInputValue, sendMessage } from "../redux/chat/actions";
import socket from './socket';


export default function ChatTextArea() {
    const { inputValue } = store.getState().ChatReducer;
    
    useEffect(()=>{
        socket.on('Messages', message =>{
            store.dispatch(sendMessage(message));
           console.log("Server: ", message.content)
       })
       return () => socket.off();
    },[])

  return (
    <div class="input-group">
      <input
        id="btn-input"
        type="text"
        class="form-control input-sm"
        placeholder="Type your message here..."
        onChange={(event) => store.dispatch(setInputValue(event.target.value))}
      />
      <span class="input-group-btn">
        <button
          class="btn btn-warning btn-sm"
          id="btn-chat"
          onClick={() => (socket.emit('Message',inputValue)
          )}
        >
          Send
        </button>
      </span>
    </div>
  );
}