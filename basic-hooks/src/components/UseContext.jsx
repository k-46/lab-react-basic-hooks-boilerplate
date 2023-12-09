import React, { useEffect, useState } from 'react';
import { ToggleTheme } from '../App.jsx';

function UseContext() {

  const [text,setText] = useState(false);
  const [likes,setLikes] = useState(0);

  useEffect(()=>{
    alert("Content button has been clicked")
  },[text])

    const theme = React.useContext(ToggleTheme);
    const themeStyle = {
      backgroundColor: theme?"black":"grey",
      color:theme?"grey":"black",
      padding:"2rem",
      margin:"2rem"
    }
    
  return (
    <div style={themeStyle}>

      {text && 
      <p>
        This is made by Kalvium
      </p>
      }
      <button onClick={()=>setText(!text)}>
        Content
      </button>
      <h1>
        {likes}
      </h1>
      <button onClick={()=>setLikes((prev)=>prev+1)}>
        Like
      </button>

    </div>
  )
}

export default UseContext