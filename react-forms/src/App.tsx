import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Register } from "./components/Register";
import { MakeOrder } from "./components/MakeOrder";

function App() {
  return (
    <div className="App">
      <Register></Register>
      <MakeOrder></MakeOrder>
    </div>
  );
}

export default App;
