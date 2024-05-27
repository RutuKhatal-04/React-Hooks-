import React, { useState } from "react";

function StateHook1() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count{count}</button>
    </div>
  );
}

export default StateHook1;

// useState is a hook that lets u add react state to functional component
// useState takes the attribute the initial value , return variable and function to be implemented
// Steps
// import useState
// call it call useState and passing in initial value and assign return pair of values to variables using array desctructuring and return them in render function
//     the variable count will always contain the current state value and setcCount will accept that argument and setcount value to that argument

// RULES WHILE WRITING RULES
// ONLY CALL HOOKS AT THE TOP LEVEL
// DONT CALL HOOKS INSIDE LOOPS, CONDITION AND NESTED FUNCTION
// ONLY CALL HOOKS FROM REACT FUNCTION NOT JUST ANY REGUALR JS FUNCTION
