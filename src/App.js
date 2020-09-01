
import React from "react";
import ChatContainer from "./components/chat_container";
import store from "./redux/store";
import { setInputName, setRegister } from "./redux/chat/actions";
import "./App.css";
import socket from './components/socket';

function App() {
  const { name, register } = store.getState().ChatReducer;

  const signUp = (e) => {
    e.preventDefault();
    console.log(name)
    name!==""? store.dispatch(setRegister(true)):store.dispatch(setRegister(false));
    socket.emit('Conected', name)
  }
  return (
        <div className="App">
          {
            !register &&
            <form onSubmit={signUp}>
            <input type="text" onChange={e => store.dispatch(setInputName(e.target.value))} required/>
            <button>Go to chat</button>
          </form>
          }
          {
            register &&
            <ChatContainer />
          }
        </div>
      );
  // return ;
}

export default App;
