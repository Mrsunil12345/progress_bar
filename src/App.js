import logo from "./logo.svg";
import "./App.css";
//import Progress from "./components/Progress";
import ProgressBar from "./components/ProgressBar";
import { useEffect, useState } from "react";

function App() {
  let [value, setValue] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setValue((val) => {
        return val + 1;
      });
    }, 100);
  }, []);

  return (
    <div className="App">
      <ProgressBar value={value} />
    </div>
  );
}

export default App;
