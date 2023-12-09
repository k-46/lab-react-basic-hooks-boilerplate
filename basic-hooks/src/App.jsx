import React, { useState } from "react";

// import UseEffect from "./components/UseEffect";

import UseContext from "./components/UseContext";

import "./App.css";


export  const ToggleTheme = React.createContext();

function App() {
  // const [count, setCount] = useState({age:0,sibling:0});
  // const [sibling, setSibling] = useState(0);

  // const handleClick = (key) => {
  //   // setCount((prev) => prev + 1);
  //   setCount({...count, [key]: count[key] + 1});
  // };



  const [state, setState] = useState(true);


  const handleToggle = () =>{
    setState((state) => !state);
  }

  // const handleSibling = () =>{
  //   setSibling((prev) => prev + 1);

  // }

  return (
    <>

      {/* <UseEffect/> */}

      <button onClick={handleToggle}>
        Toggle
      </button>
    <div className="content">
      <ToggleTheme.Provider value={state}>
        <UseContext/>
      </ToggleTheme.Provider>

    </div>



    </>
  );
}

export default App;
