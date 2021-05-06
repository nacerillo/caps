"user strict";
//this is a cleint library-which talks to a server that uses
const io = require("socket.io-client");
const SERVER_URL = "http://localhost:3000";
//socket is the client that is connected to the namespace (caps)
const socket = io.connect(`${SERVER_URL}/caps`);

//every 1.5 seconds -> put an item in tranist status
socket.on("pickup", (payload) => {
  setTimeout(() => {
    socket.emit("in-transit", payload);
    console.log("picking up ", payload.orderID);
  }, 1500);

  //every 3 seconds- put an item in deleived status
  setTimeout(() => {
    socket.emit("delivered", payload);
    console.log("delivered: ", payload.orderID);
  }, 3000);
});
