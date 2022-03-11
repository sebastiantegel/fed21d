import "./App.css";
import { HelloWorld } from "./components/hello-world/HelloWorld";

function App() {
  return (
    <div className="App">
      <HelloWorld name="Sebastian" age={42} />
    </div>
  );
}

export default App;
