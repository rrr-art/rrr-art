// server.js (Simplified Example)
const express = require('express');
const app = express();
const http = require('http').Server(app);
// Initialize Socket.IO
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html'); // Serves your main chat page
});

// Start the server
http.listen(3000, () => {
  console.log('Listening on *:3000');
});
io.on('connection', (socket) => {
  console.log('A user connected');

  // 1. User Authentication (Crucial for "Private")
  // You'll need logic here to associate a 'socket.id' with a 'User ID'
  // For example, when a user logs in, store their User ID and socket ID.
  socket.on('login', (userId) => {
    userSocketMap[userId] = socket.id; // Map User ID to their unique socket ID
  });

  // 2. Handling Private Messages
  socket.on('private message', ({ recipientId, message }) => {
    const recipientSocketId = userSocketMap[recipientId];

    if (recipientSocketId) {
      // Send the message only to the intended recipient's socket
      io.to(recipientSocketId).emit('new private message', { senderId: 'Your ID', message: message });
    }
  });
 (index.html) <ul id="messages"></ul>
<form id="form" action="">
  <input id="m" autocomplete="off" /><button>Send</button>
</form>
<script src="/socket.io/socket.io.js"></script>

  socket.on('disconnect', () => {
    console.log('User disconnected');
    // Remove the user from your online map here
  });
});
// client.js (or inside your HTML script tags)
const socket = io(); // Connects to the server

// Send a message
document.getElementById('form').onsubmit = function(e) {
  e.preventDefault();
  const message = document.getElementById('m').value;
  const recipientId = 'Other User ID'; // Logic to get the chat partner's ID

  socket.emit('private message', { recipientId, message });
  document.getElementById('m').value = '';
  return false;
};

// Receive a message
socket.on('new private message', (data) => {
  const item = document.createElement('li');
  item.textContent = `Private from ${data.senderId}: ${data.message}`;
  document.getElementById('messages').appendChild(item);
});
