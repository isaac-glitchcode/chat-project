import React,{useEffect} from "react";
import store from "../redux/store";
import { setInputValue, sendMessage } from "../redux/chat/actions";
import socket from './socket';


export default function ChatTextArea() {
    const { inputValue, name } = store.getState().ChatReducer;
    
    useEffect(()=>{
      
        socket.on('Messages', message =>{
          console.log(message)
            store.dispatch(sendMessage(message));
          //  console.log("Server: ", message.content)
       })
       return () => socket.off();
    },[])
const defaultFn = (e) => {
  e.preventDefault();
  document.getElementById("form").reset();
}
  return (
    <div className="input-group">
      <form id="form" onSubmit={(e)=>defaultFn(e)}>
        <input
          id="btn-input"
          type="text"
          className="form-control input-sm"
          placeholder="Type your message here..."
          onChange={(event) => store.dispatch(setInputValue(event.target.value))}
        />
        <span className="input-group-btn">
          <button
            className="btn btn-primary btn-sm"
            id="btn-chat"
            onClick={() => (socket.emit('Message',name,inputValue)
            )}
          >
            Send
          </button>
        </span>
      </form>
    </div>
  );
}