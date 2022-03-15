import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ShowState } from "./components/ShowState";
import { ShowEvents } from "./components/ShowEvents";
import { Child } from "./components/Child";
import { IPerson } from "./models/IPerson";

function App() {
  let p: IPerson = { name: "Sebastian", age: 42 };

  return (
    <div className="App">
      <ShowState></ShowState>
      <ShowEvents></ShowEvents>
      <Child person={p}></Child>
    </div>
  );
}

export default App;
