const io = require("socket.io-client");
const { Socket } = require("socket.io-client");
var faker = require("faker");

let host = "http://localhost:3000";

const capsConnect = io.connect(`${host}/caps`);
capsConnect.on("delivered", handlePickup);
setInterval(() => {
  var storeName = "MY Store!"; // process.env ==
  var orderID = faker.datatype.uuid(); // Kassandra.Haley@erich.biz
  var customer = faker.name.lastName() + " " + faker.name.firstName();
  var address = faker.address.streetAddress();
  let newItem = {
    store: storeName,
    orderID: orderID,
    customer: customer,
    address: address,
  };
  capsConnect.emit("pickup", newItem); //create fake item data;
}, 5000);

function handlePickup(payload) {
  console.log("Thank You!", payload);
}
