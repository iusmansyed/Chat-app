const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});
io.on("connection", (socket) => {
  console.log(`client connet ${socket.id}`);
  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User With ID : ${socket.id} Joined room : ${data}`);
  });
  socket.on("disconnect", () => {
    console.log("USER DISCONNECTED", socket.id);
  });
});

server.listen(3001, () => {
  console.log("server running");
});
