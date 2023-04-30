const path = require("node:path");
const http = require("node:http");
const express = require("express");
const {Server} = require("socket.io");
const app = express();
const httpServer = http.createServer(app);
const io = new Server(httpServer);

io.on("connection",(socket)=>{
    console.log(`A USER CONNECTED, socketId: ${socket.id}`);

    // setInterval(()=>{
    //     socket.emit("server=>client2222")
    //    },500)
    socket.on("msg_send",(data)=>{
        console.log(data)

        // io.emit("msg_received",data)
        socket.broadcast.emit("msg_received",data)
    })
});


app.use('/',express.static(path.join(__dirname,"public")));

httpServer.listen(3000,()=>{
    console.log(`SERVER RUNNING ON PORT 3000`);
});