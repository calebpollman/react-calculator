import React from "react";
import Calculator from "../Calculator/Calculator";
import "./App.css";

const App = props => (
  <div className="app-container">
    <h1>{props.name}</h1>
    <Calculator />
  </div>
);

export default App;
