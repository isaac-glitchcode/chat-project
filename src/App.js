import React, {useState} from 'react';
import socket from './components/socket';
import Chat from './components/chat';

import './App.css';

function App() {
  // 
  const [name, setName] = useState("");
  const [register, setRegister] = useState(false);

  const signUp = (e) => {
    e.preventDefault();
    name !== ""? setRegister(true):setRegister(false);
    socket.emit('Conected', name)
  }
  
  return (
    <div className="App">
      {
        !register &&
        <form onSubmit={signUp}>
        <input type="text" value={name} onChange={e => setName(e.target.value)}/>
        <button>Go to chat</button>
      </form>
      }
      {
        register &&
          <Chat name ={name}/>
      }
    </div>
  );
}

export default App;
