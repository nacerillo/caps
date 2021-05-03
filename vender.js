const events = require("./events");

events.on("delivered", handlePickup);

setInterval(() => {
  let newItem = events.emit("pickup", newItem); //create fake item data;
}, 5000);

function handlePickup(payload) {
  console.log("Thank You!", payload);
}
