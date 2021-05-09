"use strict";

const faker = require("faker");
const io = require("socket.io-client");
const HOST = "http://localhost:3000";
const { thankYouHandler } = require("./vendor-handler.js");
const socket = io.connect(`${HOST}/caps`);

const store = process.argv.splice(2)[0];

socket.emit("join", store);
socket.emit("getAll");
socket.on("message", (message) => {
  console.log("message", message.payload);
  socket.emit("received", message);
});

/*socket.on("delivered", (payload) => {
  console.log("Item # - delievered", payload.orderID);
});*/

socket.on("delievered", thankYouHandler);

/*setInterval(() => {
  let pkage = {
    store: store,
    orderID: faker.datatype.uuid(),
    customer: faker.name.findName(),
    address: faker.address.streetAddress(),
  };
  socket.emit("pickup", pkage);
}, 5000);*/
