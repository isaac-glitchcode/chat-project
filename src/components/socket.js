import io from 'socket.io-client';

let socket = io("//localhost:3000");
// let socket = io("https://chatserveracademlo.herokuapp.com:3000")

export default socket;