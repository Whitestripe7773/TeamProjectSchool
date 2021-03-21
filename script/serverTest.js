const express = require('express');
const path = require('path');
const http = require('http');
const PORT = process.env.PORT || 3000;
const socketio = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketio(server);

const clientPath = `${__dirname}/../script`;
console.log(`Clientpath: ${clientPath}`);

// Sete static folder
app.use(express.static(path.join( clientPath, 'script' )));

app.get('/', function (req, res) {
  res.render('app', {});
});

// Message on crash (error)
server.on('error', (err) => {
  console.log(`Server error: ${err}`);
});

// Start server
server.listen(PORT, () => console.log(`Server running on port: ${PORT}`));

// Handle a socket connection request from a web client
io.on('connection', socket => {
  console.log('New WS Connection');
})



