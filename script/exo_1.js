// Exo 1.2

function getBanknotes(amount) {
    let counter = new Map;
    counter.set('50', 0)
    counter.set('20', 0)
    counter.set('10', 0)
    for (let billet of counter) {
        counter.set(billet, Math.floor(amount / billet));
        amount = amount % billet;
    }

}

// Exo 1.3

function existsInArray(element, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            return true;
        }
    }
    return false;
}

// j'ai 2 tableaux, je parcours chacun d'eux
function mergeArrays(arr1, arr2) {
    let newArr = [];

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (!existsInArray(arr1[i], arr1) && !existsInArray(arr2[j], arr2)) {
                newArr += arr1[i]
                newArr += arr2[j]
            }
        }
    }

    return newArr
}

let arr1 = [1, 7, 4, 10]
let arr2 = [2, 8, 3]
console.log(mergeArrays(arr1, arr2))

