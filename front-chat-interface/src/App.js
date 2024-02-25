import { useState } from "react";
import "./App.css";

function App() {
  const {input, setInput} = useState("");
  
  const handleSend = () => {
    console.log("sent");
  };

  return (
    <div className="App">
      <div className = "chat">
        <div className = "user-message">
          This is a user message
        </div>

        <div className = "bot-message">
          This is a bot message
        </div>
      </div>
      
      <div className="input-container">
        <input type='text' value = {input} onChange={e => setInput(e.target.input)}/>
        <button onClick={handleSend}> 
          SEND
        </button>
      </div>
    </div>
  );
}

export default App;
