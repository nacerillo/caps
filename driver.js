/*const events = require("./events");
var faker = require("faker");*/
const io = require("socket.io-client");
var faker = require("faker");

let host = "http://localhost:3000";
const capsConnect = io.connect(`${host}/caps`);
capsConnect.on("pickup", handleTransit);
capsConnect.on("pickup", handleDelivered);
function handleTransit(payload) {
  setTimeout(function () {
    console.log("DRIVER: Picked up ", payload.orderID);
    capsConnect.emit("in-transit", payload);
  }, 1000);
}

function handleDelivered(payload) {
  setTimeout(function () {
    console.log("delivered");
    capsConnect.emit("delivered", payload);
  }, 3000);
}
