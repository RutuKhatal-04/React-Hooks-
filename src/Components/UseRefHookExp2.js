import React, { useState, useEffect, useRef } from "react";

function UseRefHookExp2() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  return (
    <div>
      Hoom Timer-{timer}
      <button onClick={() => clearInterval(intervalRef.current)}>
        Clear Interval
      </button>
    </div>
  );
}

export default UseRefHookExp2;
