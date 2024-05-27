//Run effect only once
// use[] empty array to run effect only once as a second parameter
import React, { useEffect, useState } from "react";

function EffectHook3() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    console.log("useeffect called");
    window.addEventListener("mousemove", logMousePosition);

    return () => {
      console.log("Component unmounting code");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  const logMousePosition = (e) => {
    console.log("Mouse event");
    setX(e.clientX);
    setY(e.clientY);
  };
  return (
    <div>
      Hooks X - {x} Y-{y}
    </div>
  );
}

export default EffectHook3;
