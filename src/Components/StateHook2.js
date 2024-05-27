//useState with previous state

import React, { useState } from "react";

function StateHook2() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  return (
    <div>
      Count:{count}
      {/* <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button> */}
      {/* But this is not safest way we have to increment in another safest way given below  */}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
    </div>
  );
}

export default StateHook2;
