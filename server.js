const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const http = require('http');
const { Server } = require('socket.io');

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket) => {
    console.log('socket connected', socket.id);
});

const PORT = 5000;
server.listen(PORT, () => {
    console.log("Server is listening on port", PORT);
});
