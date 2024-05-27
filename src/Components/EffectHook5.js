// useeffect with incorrect dependency
//interval hook counter
import React, { useState, useEffect } from "react";

function EffectHook5() {
  const [count, setCount] = useState(0);
  const tick = () => {
    setCount((prevCount) => prevCount + 1);
  };
  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return <div>{count}</div>;
}

export default EffectHook5;

// return in useeffect is for cleanup or unmount the replicate component
