import React, { Component, useReducer } from "react";
import "./App.css";
import ClassCounter1 from "./Components/ClassCounter1";
import StateHook1 from "./Components/StateHook1";
import StateHook2 from "./Components/StateHook2";
import StateHook3 from "./Components/StateHook3";
import StateHook4 from "./Components/StateHook4";
import ClassCounter2 from "./Components/ClassCounter2";
import EffectHook1 from "./Components/EffectHook1";
import EffectHook2 from "./Components/EffectHook2";
import ClassMouseEffect from "./Components/ClassMouseEffect";
import EffectHook3 from "./Components/EffectHook3";
import EffectHook4 from "./Components/EffectHook4";
import IntervalClassCounter from "./Components/IntervalClassCounter";
import EffectHook5 from "./Components/EffectHook5";
import EffectHook6 from "./Components/EffectHook6";
import ComponentC from "./Components/ComponentC";
import ReducerCounter from "./Components/ReducerCounter";
import ComponentE from "./Components/ComponentE";
import DatafetchUseReducer from "./Components/DatafetchUseReducer";
import DatafetchUseReducer1 from "./Components/DatafetchUseReducer1";
import UseMemoExp from "./Components/UseMemoExp";
import UseRefHook from "./Components/UseRefHook";
import UseRefHookExp from "./Components/UseRefHookExp";
import UseRefHookExp2 from "./Components/UseRefHookExp2";
import CustomHook1 from "./Components/CustomHook1";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      {/* <ClassCounter1 /> */}
      {/* <StateHook1 />
      <StateHook2 /> */}
      {/* <StateHook3 /> */}
      {/* <StateHook4 /> */}
      {/* <ClassCounter2 /> */}
      {/* <EffectHook1 /> */}
      {/* <EffectHook2 /> */}
      {/* <ClassMouseEffect /> */}
      {/* <EffectHook3 /> */}
      {/* <EffectHook4 /> */}
      {/* <IntervalClassCounter /> */}
      {/* <EffectHook5 /> */}
      {/* <EffectHook6 /> */}
      {/* <UserContext.Provider value={"Vishwas"}>
        <ChannelContext.Provider value={"Code evaluation"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <ReducerCounter /> */}
      {/* <DatafetchUseReducer /> */}
      {/* <DatafetchUseReducer1 /> */}
      {/* <UseMemoExp /> */}
      {/* <UseRefHook /> */}
      {/* <UseRefHookExp />
      <UseRefHookExp2 /> */}
      <CustomHook1 />
    </div>
  );
}

export default App;
