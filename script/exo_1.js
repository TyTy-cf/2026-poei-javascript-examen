function countWords(str) {
  let currentWord = "";
  let result = [];
  let charToAvoid = "!,";
  for (const char of str) {
    if (charToAvoid.includes(char)) {
      currentWord = "";
      continue;
    }
    if (char === " " || char === "'") {
      result.push(currentWord);
      currentWord = "";
    }
    currentWord += char;
  }

  if (currentWord !== "") {
    result.push(currentWord);
  }
  return result.length;
}

let str = "Ceci est une phrase de test";
console.log(countWords(str), "expected : 6");

str = "Un arc-en-ciel est visible";
console.log(countWords(str), "expected : 4");

str = "Vive l'algorithmie avec Javascript !";
console.log(countWords(str), "expected : 5");
