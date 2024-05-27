import React, { useMemo, useState } from "react";

function UseMemoExp() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const incerement1 = () => {
    setCounter1(counter1 + 1);
  };
  const incerement2 = () => {
    setCounter2(counter2 + 1);
  };

  const isEven = useMemo(() => {
    return counter1 % 2 == 0;
  }, [counter1]);
  return (
    <div>
      <div>
        <button onClick={incerement1}>Count one - {counter1}</button>
        <span>{isEven ? "Even" : "Odd"}</span>
      </div>
      <div>
        <button onClick={incerement2}>Count two - {counter2}</button>
      </div>
    </div>
  );
}

export default UseMemoExp;
