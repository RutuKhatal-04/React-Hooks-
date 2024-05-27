//useEffect with cleanup
import React, { useState } from "react";
import EffectHook3 from "./EffectHook3";

function EffectHook4() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
      {display && <EffectHook3 />}
    </div>
  );
}

export default EffectHook4;

// here after hiting toogle button it unmount the effecthook3 component and it shows te warning that u should also unsubscribe its functioning so to cancel it out .
// for this in class component we use componentwillUnmount and  removeEventListener
