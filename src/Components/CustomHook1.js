//custom hook that update the document title
import React, { useState, useEffect } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";

function CustomHook1() {
  const [count, setCount] = useState(0);
  //   useEffect(() => {
  //     document.title = `Count ${count} `;
  //   }, [count]);

  useDocumentTitle(count);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count-{count}</button>
    </div>
  );
}

export default CustomHook1;
