const events = require("./events");
var faker = require("faker");

events.on("pickup", handleTransit);
events.on("pickup", handleDelivered);
function handleTransit(payload) {
  setTimeout(function () {
    console.log("DRIVER: Picked up ", payload.orderID);
    events.emit("in-transit", payload);
  }, 1000);
}

function handleDelivered(payload) {
  setTimeout(function () {
    console.log("delivered");
    events.emit("delivered", payload);
  }, 3000);
}
