//useEffect after render
// how effect hook as a feature can mimic the componentDidMount,componentDidUpdate,componentWillUnmount but as functional component

import React, { useState, useEffect } from "react";

function EffectHook1() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You Clicked ${count} times`;
  });
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </div>
  );
}

export default EffectHook1;

//use effect request the react to pass upon a function which executes when every time the component renders
// use effect runs after every render of the functional component
// we have useEffect which runs both after the 1st render and after every render
//useEffect is placed inside the component
