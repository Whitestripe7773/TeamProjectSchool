const { response } = require("express");
const io = require("socket.io-client");

let games = io.connect("http://localhost:3000/games");

    // Is binded to server js
games.on("welcome", (msg) => {

    console.log("Received: " + msg);

});

// Do the following: search for namespace "joinRoom" and search for room "rocket league" -> implementation is in server.js
games.emit("joinRoom", "rocket league");

games.on("newUser", (res) => console.log(res));

games.on("err", (err) => console.log(err));
games.on("success", (res) => console.log(res));