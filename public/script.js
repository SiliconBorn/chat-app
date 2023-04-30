var  socket = io();

// socket.on("server=>client",()=>{
//     console.log("server=>client event fired");
//     const div = document.createElement("div");
//     div.innerText = "NEW EVENT FROM SERVER";
//     document.body.appendChild(div)
// })

let btn = document.getElementById("btn")
let inputMsg = document.getElementById("newMsg")
let msgList = document.getElementById("msgList")
btn.onclick = function exec(){
    socket.emit("msg_send",{
        msg:inputMsg.value
    });
    inputMsg.value ="";
}

socket.on("msg_received",(data)=>{
    let liMsg = document.createElement("li");
    let msgList = document.getElementById("msgList");

    liMsg.innerText = data.msg
    msgList.appendChild(liMsg)
})