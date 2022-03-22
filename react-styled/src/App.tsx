import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "./components/Button";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Button color="green">Klicka här för att spara</Button>
      <Button primary>Klicka här för att spara</Button>

      <div>
        <Navigation></Navigation>
      </div>
    </div>
  );
}

export default App;
