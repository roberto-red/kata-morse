import React, { useState } from "react";
import "./styles.css";

const MORSE = Object.fromEntries(
  Object.entries({
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
    0: "-----",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
    " ": "/"
  }).map(([a, b]) => [b, a])
);

const translate = (input) => {
  const chars = input.split(/\s+/);
  const result = chars.map((char) => MORSE[char] ?? `[${char}]`);
  return result;
};

export default function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  return (
    <div className="App">
      <h1>Morse</h1>
      <textarea
        onChange={(e) => {
          setInput(e.target.value);
        }}
      ></textarea>
      <button onClick={() => setOutput(translate(input))}>traducir</button>
      <output>{output}</output>
    </div>
  );
}
