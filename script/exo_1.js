function countWords(str) {
    let numWords = 1; // Nombre de mots dans la phrase. On part du principe qu'il y en a un.

    for (const letter of str) {
        if (letter === ' ') {
            numWords++;
        }
    }
    
    return numWords;
}

// console.log(countWords("Ceci est une phrase de test"));
// console.log(countWords("Un arc-en-ciel est visible"));
// console.log(countWords("Vive l'algorithmie avec iavascript !"));

function getBanknotes(amount) {
    let result = ""; // Phrase finale
    let remaining = amount; // Valeur temporaire pour ne pas affecter amount
    let orangeMoney = 0; // Nombre de billets de 50
    let blueMoney = 0; // Nombre de billets de 20
    let redMoney = 0; // Nombre de billets de 10

    if (amount % 10 !== 0) {
        return "Montant invalide, les billets de moins de 10€ n'existent pas.";
    }

    while (remaining != 0) {
        while (remaining >= 50) {
            orangeMoney++;
            remaining -= 50;
        }
        if (orangeMoney !== 0) result += `${orangeMoney} billet(s) de 50€`;
        while (remaining >= 20) {
            blueMoney++;
            remaining -= 20;
        }
        if (blueMoney !== 0) result += ` ; ${blueMoney} billet(s) de 20€`;
        while (remaining >= 10) {
            redMoney++;
            remaining -=10
        }
        if (redMoney !== 0) result += ` ; ${redMoney} billet(s) de 10€`;
    }
    
    return result;
}
// console.log(getBankNotes(130));
// console.log(getBanknotes(190));

function mergeArrays(arr1, arr2) {
    let result = [];
    let completed = false;

    for (const item of arr1) {
        result.push(parseInt(item));
    }
    for (const item of arr2) {
        result.push(parseInt(item));
    }
    while (!completed) {
        for (let i = 0; i < result.length-1; i++) {
            if (result[i] > result[i+1]) {
                let temp = result[i+1];
                result[i+1] = result[i];
                result[i] = temp;
            }
        }
        for (let i = 0; i < result.length-1; i++) {
            if (result[i] > result[i+1]) {
                completed = false;
                break
            }
            completed = true;
        }
    }

    return result;
}

// console.log(mergeArrays([1, 7, 4, 10], [2, 8, 3]));
// console.log(mergeArrays([1, 7, 4, 3], [1, 2, 8, 3]));