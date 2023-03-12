import "./App.css";
import io from "socket.io-client";
import { useState } from "react";
import Chats from "./Chats/chats";
const socket = io.connect("http://localhost:3001");
function App() {
  const[name ,setName]=useState("")
  const[room ,setRoom]=useState("")
  const JoinRoom = ()=>{
if(name !== "" && room !==""){
  socket.emit("join_room",room)
}
  }
  return (
    <div className="App">
      <div>
        <h3>join room</h3>
        <input
          placeholder="Enter User Name"
          onChange={(event) => setName(event.target.value)}
        />
        <input
          placeholder="Enter id "
          onChange={(event) => setRoom(event.target.value)}
        />
        <button onClick={JoinRoom}>Submit</button>
      </div>
      <Chats socket={socket} name={name} room={room}/>
    </div>
  );
}

export default App;
