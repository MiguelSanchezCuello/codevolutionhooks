import "./App.css";
import ClassCounter from "./components/ClassCounter";
import ClassCounterOne from "./components/ClassCounterOne";
import HookCounter from "./components/HookCounter";
import HookCounterOne from "./components/HookCounterOne";
import HookCounterFour from "./components/HookCounterFour";
import HookCounterThree from "./components/HookCounterThree";
import HookCounterTwo from "./components/HookCounterTwo";
import MiguelCounter from "./components/Miguel";
import { useState } from "react";
import ClassMouse from "./components/ClassMouse";
import HookMouse from "./components/HookMouse";

function App() {
  return (
    <div className="App">
      {/* <ClassCounterOne /> */}
      {/* <HookCounterOne /> */}
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterFour /> */}
      {/* <MiguelCounter /> */}
      {/* <ClassMouse /> */}
      <HookMouse />
    </div>
  );
}

export default App;
