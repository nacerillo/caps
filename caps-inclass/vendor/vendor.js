"use strict";

const faker = require("faker");

const io = require("socket.io-client");
const SERVER_URL = "http://localhost:3000";
const socket = io.connect(`${SERVER_URL}/caps`);

const store = "1-800-flowerz";

socket.emit("join", store);

socket.on("delivered", (payload) => {
  console.log("Item # - delievered", payload.orderID);
});

setInterval(() => {
  let pkage = {
    store: store,
    orderID: faker.datatype.uuid(),
    customer: faker.name.findName(),
    address: faker.address.streetAddress(),
  };
  socket.emit("pickup", pkage);
}, 5000);
