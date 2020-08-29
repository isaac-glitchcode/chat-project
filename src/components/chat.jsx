import React, { useState, useEffect, useRef } from 'react';

import socket from './socket';

export default function Chat({name}){
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
  
    useEffect(()=>{
        socket.emit('Conected', name)
    },[name])


    //Captural la orden de mensaje
    useEffect(()=>{
        socket.on('Messages', message =>{
            setMessages([...messages, message]);
        })
        return () => socket.off();
    },[messages])



    const submit = (e) =>{
        e.preventDefault();
        document.getElementById("clear").reset();
        //Enviar al sever el mensaje
        //Cuando el llegue message
        socket.emit('Message', name, message);
    }


    return (
      <div>
        <div>
            {messages.map((e, i) => 
                <div key={i}> 
                    <div>{e.name}</div>
                    <div>{e.message}</div>
                </div>
            )}
        </div>
        <form onSubmit={submit} id="clear">
          <label htmlFor="">Type a message</label>
          <textarea name="" id="" cols="30" rows="10" onChange={e=>setMessage(e.target.value)}></textarea>
          <button>Send</button>
        </form>
      </div>
    );
  
}
