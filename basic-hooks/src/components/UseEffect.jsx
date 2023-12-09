import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const [age, setAge] = useState(0);
  const [sib, setSib] = useState(0);

//   const [sum, setSum] = useState(0);

  useEffect(() => {
    alert(`Something changed ${age,sib}`);
  }, [age, sib]);

  return (
    <div>
      <h1>{age}</h1>
      <h1>{sib}</h1>
      <button onClick={() => setAge((prev) => prev + 1)}>age</button>
      <button onClick={() => setSib((prev) => prev + 1)}>sib</button>
    </div>
  );
};

export default UseEffect;
