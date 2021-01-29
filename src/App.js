import React, { useState } from "react";
import "./styles.css";

import { translateText } from "./morse";

export default function App() {
  const [input, setInput] = useState("");

  return (
    <div className="App">
      <h1>Morse</h1>
      <textarea
        onChange={(e) => {
          setInput(e.target.value);
        }}
      ></textarea>

      <output>{translateText(input)}</output>
    </div>
  );
}
