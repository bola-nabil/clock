import React from "react";
import Timer from "./components/Timer";
import Controls from "./components/Controls";
import Actions from "./components/Actions";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <h1 className="title">25 + 5 Clock</h1>
      <Controls />
      <Timer />
      <Actions />
      <footer>
        <p>Designed and Coded by</p>
        <p>
          <Link to="https://bola-nabil.github.io/bola-nabil/" target="_blank">
            bola-nabil
          </Link>
        </p>
      </footer>
    </div>
  );
};

export default App;
