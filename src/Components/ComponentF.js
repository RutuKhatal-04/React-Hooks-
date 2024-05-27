import React from "react";
import { UserContext, ChannelContext } from "../App";

function ComponentF()  {
 return (
      <UserContext.Consumer>
        {(user) => {
          return (
            <ChannelContext.Consumer>
              {(channel) => {
                return (
                  <div>
                    UserContext value {user},channel Context value {channel}
                  </div>
                );
              }}
            </ChannelContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    );
  }


export default ComponentF;
