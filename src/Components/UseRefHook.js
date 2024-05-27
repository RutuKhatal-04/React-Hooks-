import React, { useEffect, useRef } from "react";

function UseRefHook() {
  const inputRef = useRef(null);
  useEffect(() => {
    //focus on input ele
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
}

export default UseRefHook;

// steps
// import useRef
// create a ref variable by calling the function useref
