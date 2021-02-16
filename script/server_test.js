// Dependencies
const express = require('express');
const app = express();
const port = 3000;
const http = require("http").createServer();

const io = require('socket.io')(http);

/*
// Connection to the user that has connected to us
// Happens when user is connected
io.on("connection", (socket) => {

  // Is binded to app.js
  socket.emit("welcome", "Hello and welcome to the server!");
  console.log("New client is conneted!");
});
*/

const gameRooms = ["rocket league", "csgo", "bt1"];

io
  .of("/games")
  .on("connection", (socket) => {

  console.log("New client");
  socket.emit("welcome", "Hello and welcome to the Games Area");

  socket.on("joinRoom", (room) => {
    if(gameRooms.includes(room)){
      socket.join(room)

      io
        .of("/games")
        .in(room)
        .emit("newUser", "New player has joined the room: " + room);

      return socket.emit("success", "You have joined the room: " + room);
    }
    else{
      return socket.emit("err", "ERROR: No room named '" + room + "' found.");
    }
  });

});

// Whenever the server is running
http.listen(port, () => {
  console.log("Server is listening on localhost: " + port);
});