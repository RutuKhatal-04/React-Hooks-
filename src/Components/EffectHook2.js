//Conditionally run effects
//As useEffect hooks run after every render but in some cases executing after every render can cause prb so we can conditionally run a effect from a functional component

import React, { useEffect, useState } from "react";

function EffectHook2() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("useEffect - updating document title");
    document.title = `You Clickes ${count} times`;
  }, [count]);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </div>
  );
}

export default EffectHook2;

// How conditionally running effects is applied
// pass one more parameter  as array to the useEffect function  and that array will contain prop or state . whenever that prop or state chnages then only the useeffect will run
