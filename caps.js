const events = require("./events.js");

require("./driver");
require("./vender");

events.on("delivered", (payload) => {
  console.log("EVENT", new Date(), payload);
});
events.on("in-transit", (payload) => {
  console.log("EVENT", new Date(), payload);
});

events.on("pickup", (payload) => {
  console.log("EVENT", new Date(), payload);
});
