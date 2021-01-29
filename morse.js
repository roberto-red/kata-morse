const ERROR = "......";

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

const testError = (word, index, words) => {
  const nextWord = words[index + 1];
  if (nextWord === ERROR) return false;
  return !word.includes(ERROR);
};

const cleanEmptyChars = (char) => char !== "";

const translateWord = (input) => {
  const chars = input.split(/\s+/).filter(cleanEmptyChars);
  const result = chars.map((char) => MORSE[char] ?? `[${char}]`).join("");
  return result;
};

export const translateText = (input) => {
  const words = input.split(/\s+\/\s+/);
  return words.filter(testError).map(translateWord).join(" ");
};
