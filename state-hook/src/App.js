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

function App() {
  return (
    <div className="App">
      {/* <ClassCounterOne /> */}
      <HookCounterOne />
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterFour /> */}
      {/* <MiguelCounter /> */}
    </div>
  );
}

export default App;
