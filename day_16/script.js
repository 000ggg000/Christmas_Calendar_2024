const morseCode = [
  { A: "ho hoho" },
  { B: "hoho ho ho ho " },
  { C: "hoho ho hoho ho" },
  { D: "hoho ho ho" },
  { E: "ho" },
  { F: "ho ho hoho ho" },
  { G: "hoho hoho ho" },
  { H: "ho ho ho ho" },
  { I: "ho ho" },
  { J: "ho hoho hoho hoho" },
  { K: "hoho ho hoho" },
  { L: "ho hoho ho ho" },
  { M: "hoho hoho" },
  { N: "hoho ho" },
  { O: "hoho hoho hoho" },
  { P: "ho hoho hoho ho" },
  { Q: "hoho hoho ho hoho" },
  { R: "ho hoho ho" },
  { S: "ho ho ho" },
  { T: "hoho" },
  { U: "ho ho hoho" },
  { V: "ho ho ho hoho" },
  { W: "ho hoho hoho" },
  { X: "hoho ho ho hoho" },
  { Y: "hoho ho hoho hoho" },
  { Z: "hoho hoho ho ho" },
];

const morseCodeMap = {};
morseCode.forEach((letterObj) => {
  const letter = Object.keys(letterObj)[0];
  const code = letterObj[letter];
  morseCodeMap[letter] = code;
});

function elfMorse(word) {
  return word
    .split("")
    .map((char) => {
      const upperChar = char.toUpperCase();
      return morseCodeMap[upperChar] || char;
    })
    .join(" ");
}

console.log(elfMorse("MERRY"));
console.log(elfMorse("christmas"));
console.log(elfMorse("Dear elfs"));
