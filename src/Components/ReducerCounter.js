// import React, { useReducer } from "react";

// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// };

// function ReducerCounter() {
//   const [count, dispatch] = useReducer(reducer, initialState);
//   return (
//     <div>
//       <div>Count -{count}</div>
//       <button onClick={() => dispatch("increment")}>Incerement</button>
//       <button onClick={() => dispatch("reset")}>Rest</button>
//       <button onClick={() => dispatch("decrement")}>Decrement </button>
//     </div>
//   );
// }

// export default ReducerCounter;

// // useReducer(complexstate and action is below)
// import React, { useReducer } from "react";

// const initialState = {
//   fisrtCounter: 0,
//   secondCounter: 10,
// };
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "increment":
//       return { ...state, fisrtCounter: state.fisrtCounter + action.value };
//     case "decrement":
//       return { ...state, fisrtCounter: state.fisrtCounter - action.value };
//     case "increment2":
//       return { ...state, secondCounter: state.secondCounter + action.value };
//     case "decrement2":
//       return { ...state, secondCounter: state.secondCounter - action.value };
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// };

// function ReducerCounter() {
//   const [count, dispatch] = useReducer(reducer, initialState);
//   return (
//     <div>
//       <div>fisrtCounter -{count.fisrtCounter}</div>
//       <div>secondCounter -{count.secondCounter}</div>
//       <button onClick={() => dispatch({ type: "increment", value: 1 })}>
//         Incerement
//       </button>
//       <button onClick={() => dispatch({ type: "increment", value: 5 })}>
//         Incerement5
//       </button>
//       <button onClick={() => dispatch({ type: "reset" })}>Rest</button>
//       <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
//         Decrement
//       </button>
//       <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
//         Decrement5
//       </button>
//       <button onClick={() => dispatch({ type: "increment2", value: 1 })}>
//         Increment Counter
//       </button>
//       <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
//         Decrement Counter
//       </button>
//     </div>
//   );
// }

// export default ReducerCounter;

// Know to make it more simpler we can use Multiple useReducer  given below is example

import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function ReducerCounter() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [count2, dispatch2] = useReducer(reducer, initialState);
  return (
    <div>
      <div>Count -{count}</div>
      <button onClick={() => dispatch("increment")}>Incerement</button>
      <button onClick={() => dispatch("reset")}>Rest</button>
      <button onClick={() => dispatch("decrement")}>Decrement </button>
      <div>
        <div>Count -{count2}</div>
        <button onClick={() => dispatch2("increment")}>Incerement</button>
        <button onClick={() => dispatch2("reset")}>Rest</button>
        <button onClick={() => dispatch2("decrement")}>Decrement </button>
      </div>
    </div>
  );
}

export default ReducerCounter;
