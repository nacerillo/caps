const SERVER_URI = 3000;
const io = require("socket.io")(SERVER_URI);
const uuid = require("uuid").v4;
const caps = io.of("/caps");

//message queue
const messageQueue = {
  "acme-widgets": {},
  "1-26-flowers": {},
};

caps.on("connection", (socket) => {
  socket.on("join", (room) => {
    console.log("room: ", room);
    socket.join(room);
  });
});
/*
- Add an event handler for received
- When this event is heard on the server, assume it’s the client telling you they got a message
- The payload should include the client id, event name, and message id, so that you can delete it from the queue
*/
socket.on("received", (payload) => {
  let storeName = payload.store;
  let orderID = payload.orderID;
  delete messageQueue[storeName][orderID];
});

/*
- Add an event handler for getAll
- The payload should include the client id and event name
- When this event is heard on the server, find each of the messages in the queue for the client, for the event specified
- Go through each of the entries for the client/event in the queue (if any) and broadcast them to the client
*/
socket.on("getAll", (payload) => {
  Object.keys(messageQueue[payload]).forEach((id) => {
    socket.emit("message", { id, payload: queue[payload][id] });
  });
});

/*
- Add an event handler for package delivery: delivered
- This is our actual application logic (finally)
- When this event is triggered:
- Add the message immediately to the queue
- Broadcast the same event, with the following payload to all subscribers
*/
socket.on("delievered", (payload) => {
  logger("delivered", payload);
  let storeName = payload.store;
  let orderID = payload.orderID;
  messageQueue[storeName][orderID] = { payload };
  caps.to(storeName).emit("delivered", payload);
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

//print the action and the data being passed in
//this gives us information.
function logger(event, payload) {
  let timestamp = new Date();
  console.log({ timestamp, event, payload }); //object destructure
}
