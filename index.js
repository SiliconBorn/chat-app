const path = require("node:path");
const http = require("node:http");
const express = require("express");
const {Server} = require("socket.io");
const app = express();
const httpServer = http.createServer(app);
const io = new Server(httpServer);

io.on("connection",(socket)=>{
    console.log(`A USER CONNECTED, socketId: ${socket.id}`);

    setInterval(()=>{
     socket.emit("server=>client")
    },2000)

    // setInterval(()=>{
    //     socket.emit("server=>client2222")
    //    },500)
    socket.on("client=>server",()=>{
        console.log("client=>server event captured")
    })
});


app.use('/',express.static(path.join(__dirname,"public")));

httpServer.listen(3000,()=>{
    console.log(`SERVER RUNNING ON PORT 3000`);
});