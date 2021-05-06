"use strict";

const express = require("express");
const cors = require("cors");
const faker = require("faker");
const io = require("socket.io-client");
const app = express();
const PORT = process.env.PORT || 3001; //remember, server hub lives on 3000
const SERVER_URL = process.env.SERVER_URL || "http://localhost:3000";

//connect our socket.io clent to socket.io server
const socket = io.connect(`${SERVER_URL}/caps`);

app.use(cors()); //open api route to all
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//this is our API Route
app.post("/pickup", (req, res) => {
  let pkage = req.body || {
    store: "1-800-flowers",
    orderID: faker.datatype.uuid(),
    customer: faker.name.findName(),
    address: faker.address.streetAddress(),
  };
  socket.emit("pickup", pkage);
  res.status(200).send("your package was scheduled!");
});

app.listen(PORT, () => {
  console.log(`API SERVER IS UP ON ${PORT}`);
});
