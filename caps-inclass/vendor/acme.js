const faker = require("faker");
const io = require("socket.io-client");
const { thankYouHandler } = require("./vender-handler.js");

const HOST = "http://localhost:3000";
const socket = io.connect(`${HOST}/caps`);

const store = "acme-widegts";

socket.emit("join", store);
socket.emit("getAll", store);
socket.on("message", (message) => {
  console.log("messages: ", message.payload.payload);
  socket.emit("received", message.payload.payload);
});

socket.on("delievered", thankYouHandler);
socket.on("delievered", (message) => {
  socket.emit("received", message);
});
