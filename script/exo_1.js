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

// let str = "Ceci est une phrase de test";
// console.log(countWords(str), "expected : 6");

// str = "Un arc-en-ciel est visible";
// console.log(countWords(str), "expected : 4");

// str = "Vive l'algorithmie avec Javascript !";
// console.log(countWords(str), "expected : 5");

function getBanknotes(amount) {
  let bankNotes = [50, 20, 10];
  let nbrOfBankNotes = new Map();
  let result = "";
  if (amount % 10 !== 0) {
    return "Montant invalide, les billets de moins de 10€ n'existent pas.";
  }

  for (const bankNote of bankNotes) {
    let tmpCount = Math.floor(amount / bankNote);
    amount -= tmpCount * bankNote;

    if (tmpCount !== 0) {
      result += `${tmpCount} billet(s) de ${bankNote}€ ; `;
    }
  }

  return result;
}

// let amount = 230;
// console.log(getBanknotes(amount));

// amount = 190;
// console.log(getBanknotes(amount));

// amount = 39;
// console.log(getBanknotes(amount));

function mergeArrays(arr1, arr2) {
  const set = new Set();
  let result = [];

  for (const nbr2 of arr2) {
    set.add(nbr2);
  }
  for (const nbr1 of arr1) {
    set.add(nbr1);
  }

  console.log(set);
  for (const nbr of set) {
    result.push(nbr);
  }

  for (let i = 1; i < result.length; i++) {
    for (let j = i; j && result[j - 1] > result[j]; j--) {
      [result[j], result[j - 1]] = [result[j - 1], result[j]];
    }
  }

  return result;
}

let arr1 = [1, 7, 4, 10];
let arr2 = [2, 8, 3];
console.log(mergeArrays(arr1, arr2));
console.log("expected [1, 2, 3, 4, 7, 8, 10]");

arr1 = [1, 7, 4, 3];
arr2 = [1, 2, 8, 3];
console.log(mergeArrays(arr1, arr2));
console.log("expected [1, 2, 3, 4, 7, 8]");
