
function countWords(str) {
    let nbWords = 0;
    let tmpWord = '';

    for (const letter of str) {
        if (letter === '!') continue;

        tmpWord += letter;
        if (letter === ' ' || letter === '\'') {
            nbWords++;
            tmpWord = '';
        }
    }

    if (tmpWord.length > 0) {
        nbWords++;
    }

    return nbWords;
}

console.log(countWords("Ceci est une phrase de test"))
console.log(countWords("Un arc-en-ciel est visible"))
console.log(countWords("Vive l'algorithmie avec Javascript !"))

function getBanknotes(amount) {
    const bills = [50, 20, 10];
    let result = '';

    for (const bill of bills) {
        const nbBills = Math.floor(amount / bill);

        if (nbBills === 0) continue;

        if (result !== '') {
            result += " ; "
        }

        result += nbBills + " billet(s) de " + bill;
        amount -= (nbBills * bill);
    }

    return result;
}

console.log(getBanknotes(130))
console.log(getBanknotes(190))

function mergeArrays(arr1, arr2) {
    const arrayWithoutDoubles = [];
    removeDoubleFromArray(arr1, arrayWithoutDoubles);
    removeDoubleFromArray(arr2, arrayWithoutDoubles);
    const nbElements = arrayWithoutDoubles.length;

    for (let i = 0; i < nbElements - 1; i++) {
        for (let j = i + 1; j < nbElements; j++) {
            if (arrayWithoutDoubles[j] < arrayWithoutDoubles[i]) {
                const tmp = arrayWithoutDoubles[i];
                arrayWithoutDoubles[i] = arrayWithoutDoubles[j];
                arrayWithoutDoubles[j] = tmp;
            }
        }
    }

    return arrayWithoutDoubles;
}

console.log(mergeArrays([1, 7, 4, 10], [2, 8, 3]))
console.log(mergeArrays([1, 7, 4, 3], [1, 2, 8, 3]))

function removeDoubleFromArray(arr, arraySaves) {
    for (const elt of arr) {
        if (arraySaves.includes(elt)) continue;
        arraySaves.push(elt);
    }
}