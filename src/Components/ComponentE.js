import React, { useContext } from "react";
import ComponentF from "./ComponentF.js";
import { UserContext, ChannelContext } from "react";

function ComponentE() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <div>
      {user} ,{channel}
    </div>
  );
}

export default ComponentE;
