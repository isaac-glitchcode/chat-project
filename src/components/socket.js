import io from 'socket.io-client';

let socket = io("https://chatserveracademlo.herokuapp.com/")

export default socket;
