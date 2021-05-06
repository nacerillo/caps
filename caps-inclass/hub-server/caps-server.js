//this is our socket-io module.

"use strict";
const PORT = process.env.PORT || 3000;
const io = require("socket.io")(PORT);

//lets us talk at a network level

//when you connec to this server...
io.on("connection", (socket) => {
  //you are represented as a socket object.
  console.log("connected user - server level: ", socket.id);
});

// namespace called caps
const caps = io.of("/caps");

//connect to namespace
caps.on("connection", (socket) => {
  console.log("connected user - namespace: ", socket.id);
  //ask him to go over this again
  socket.on("join", (room) => {
    console.log("room name: ", room);
    socket.join(room);
  });

  socket.on("pickup", (payload) => {
    logger("pickup", payload);
    //hey everyone! we just picked up
    caps.emit("pickup", payload);
  });

  //socekt represents a connected cleint that is in the namespace "caps"
  socket.on("in-transit", (payload) => {
    logger("in-transit", payload);
    /*anyone connected to namespace, if your also connect to the store-room, 
    we let you know HEY, Your package is in transit*/
    caps.emit("in-transit", payload);
  });

  socket.on("delivered", (payload) => {
    logger("delivered", payload);
    caps.emit("delivered", payload);
  });
});

//print the time action takes place
//print the action and the data being passed in
//this gives us information.
function logger(event, payload) {
  let timestamp = new Date();
  console.log({ timestamp, event, payload }); //object destructure
}
