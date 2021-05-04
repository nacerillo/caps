//const events = require("./events.js");
//const port = process.env.PORT || 3000;
//const soecket = require("socket.io")(PORT);
//const io = require('socket.io-client');
/*require("./driver");
require("./vender");
events.on("delivered", (payload) => {
  console.log("EVENT", new Date(), payload);
});
events.on("in-transit", (payload) => {
  console.log("EVENT", new Date(), payload);
});

events.on("pickup", (payload) => {
  console.log("EVENT", new Date(), payload);
});*/

//Listen for the following connections
//pickup, in-transit, delivered

const io = require("socket.io")(3000);

//const capsConnection = io.connect(`${HOST}/caps`); -- put this inside of driver/vender
//const venderConnection = io.connect(`${HOST}/vender`);
const capsConnection = io.of("/caps");
capsConnection.on("connection", (socket) => {
  console.log("CONNECTED", socket.id);

  socket.on("pickup", (payload) => {
    console.log("SERVER EVENT: pickup", payload);
    socket.emit("pickup", payload);
  });

  socket.on("in-tranist", (payload) => {
    console.log("SERVER EVENT: in-tranist", payload);
    io.emit("in-transit", payload);
  });

  socket.on("delivered", (payload) => {
    console.log("SERVER EVENT: delivered", payload);
    io.emit("delivered", payload);
  });
});
