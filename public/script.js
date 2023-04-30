var  socket = io();

socket.on("server=>client",()=>{
    console.log("server=>client event fired")
    const div = document.createElement("div");
    div.innerText = "NEW EVENT FROM SERVER";
    document.body.appendChild(div)
})

let btn = document.getElementById("btn")
btn.onclick = function exec(){
    socket.emit("client=>server")
}