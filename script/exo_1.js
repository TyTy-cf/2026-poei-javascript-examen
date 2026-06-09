function countWords(str) {
    let count = 0;
    let isWord = false;

    for (let char of str) {
        const isCharValid = (char !== ' ' && char !== "'" && char !== '!' && char !== '?' && char !== '.');
        if (isCharValid) {
            if (!isWord) {
                count++;
                isWord = true;
            }
        } else {
            isWord = false;
        }
    }
    return count;
}

console.log(countWords("Ceci est une phrase de test"));
console.log(countWords("Un arc-en-ciel est visible"));
console.log(countWords("Vive l'algorithmie avec Javascript !"));

function getBanknotes(amount) {
    if (amount % 10 !== 0) {
        return "Montant invalide, les billets de moins de 10€ n'existent pas.";
    }

    let remaining = amount;
    let result = [];

    const notes = [50, 20, 10];

    for (let note of notes) {
        let count = Math.floor(remaining / note);

        if (count > 0) {
            result.push(`${count} billet(s) de ${note}€`);
            remaining %= note;
        }
    }

    return result.join(" ; ");
}

console.log(getBanknotes(130));
console.log(getBanknotes(190));
console.log(getBanknotes(45));


function mergeArrays(arr1, arr2) {
    let combined = [];

    function addUnique(arr) {
        for (let i = 0; i < arr.length; i++) {
            let exists = false;
            for (let j = 0; j < combined.length; j++) {
                if (combined[j] === arr[i]) {
                    exists = true;
                    break;
                }
            }
            if (!exists) {
                combined.push(arr[i]);
            }
        }
    }

    addUnique(arr1);
    addUnique(arr2);

    for (let i = 0; i < combined.length; i++) {
        for (let j = 0; j < combined.length - 1 - i; j++) {
            if (combined[j] > combined[j + 1]) {
                let temp = combined[j];
                combined[j] = combined[j + 1];
                combined[j + 1] = temp;
            }
        }
    }

    return combined;
}

console.log(mergeArrays([1, 7, 4, 10], [2, 8, 3]));
console.log(mergeArrays([1, 7, 4, 3], [1, 2, 8, 3]));
console.log(mergeArrays([1, 1, 2, 3], [2, 2, 3, 4]));