import React, { useEffect, useState } from 'react';
import { chat } from './ChatGPTAPI/chatGPTAPI';


function App() {
  const [prompt, setPrompt] = useState("")
  const [answer, setAnswer] = useState("")
  const [lock, setLock] = useState("")


  const handleSend = () => {
    chat(prompt).then((response) => {
      setAnswer(response.data.choices[0].text || "1");
    }).catch((error) => {
      console.error(error);
    });
  }

  return ( 
    <div style={{textAlign:"center",justifyContent:"center", width:"40%",margin:"auto",marginTop:"50px"}}>
      {(lock != process.env.REACT_APP_LOCK)?<>
        <p>Input a combination that ELnur gave you</p>
        <input type="text" value={lock} onChange={(e) => setLock(e.target.value)} />
      </>:
      <>
        <input type="text" value={prompt} onChange={(e) => setPrompt(e.target.value)} />
        <button onClick={handleSend}>Send</button>
        <p>{answer}</p>
      </>}

    </div>
  );
}

export default App;
