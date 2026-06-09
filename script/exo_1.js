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
