# LAB 12: Class 401

## Project: Socket.io

### Author: Nicholas Cerillo

### Links and Resources

- [ci/cd](https://github.com/nacerillo/caps)
- [Actions]()

### Setup

#### `.env` requirements

#### How to initialize/run your application

- e.g. `node caps.js`

#### Tests

- As a vendor, I want to alert the system when I have a package to be picked up
- As a driver, I want to be notified when there is a package to be delivered
- As a driver, I want to alert the system when I have picked up a package and it is in transit
- As a driver, I want to alert the system when a package has been delivered
- As a vendor, I want to be notified when my package has been delivered

#### New Requirements

- As a **vendor**, I want to “subscribe” to “delivered” notifications so that I know when my packages are delivered
- As a **vendor**, I want to “catch up” on any “delivered” notifications that I might have missed so that I can see a complete log
- As a **driver**, I want to “subscribe” to “pickup” notifications so that I know what packages to deliver
- As a **driver**, I want to “catch up” on any “pickup” notifications I may have missed so that I can deliver everything
- As a **driver**, I want a way to “scan” a delivery so that the vendors know when a package has been delivered

#### UML / Application Wiring Diagram

![alt text](https://github.com/nacerillo/caps/blob/dev/assets/Screen%20Shot%202021-05-03%20at%204.22.32%20PM.png)
[assets link](https://github.com/nacerillo/caps/blob/dev/assets/Screen%20Shot%202021-05-03%20at%204.22.32%20PM.png)
