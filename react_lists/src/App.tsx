import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { CondRend } from "./components/CondRend";
import { Lists } from "./components/Lists";

function App() {
  return (
    <div className="App">
      <CondRend></CondRend>
      <Lists></Lists>
    </div>
  );
}

export default App;
