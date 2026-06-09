function countwords(str) {
    let count = 0;
    str = str.trim().replace(/[^\w\s-]/g, '');
    if (str.length >= 0)
    {
        count ++;
        for (const letter of str) {
            if (letter === ' ' || letter === '\'')
            {
                count ++;
            }
        }}

    return count;
}

function getBanknotes(amount) {
    const bankNotes = [50, 20, 10];
    let output = "";
    if (amount%10 === 0)
    {
        for (const bankNote of bankNotes) {
            if (Math.floor(amount/bankNote) !== 0)
            {
                output += (bankNote !== bankNotes[0] && " " || "") + Math.floor(amount/bankNote) + " Billet(s) de " + bankNote + "€" + (amount%bankNote !== 0 && " ;" || "");
                amount %= bankNote;
            }
        }
    } else {
        output = "Montant invalide, les billets de moins de 10€ n'existent pas.";
    }

    return output;
}

function mergeArrays(arr1, arr2) {
    let newArray = [];

    newArray = arr1.concat(arr2);

    newArray = orderArray(newArray)

    return newArray;
}

function orderArray(arr) {
    let orderedArray = [];

    for (const arrElement of arr) {

        orderedArray.length === 0 && orderedArray.push(arrElement);

        for (let i = 0; i < orderedArray.length; i++) {

            if (orderedArray[i] === arrElement) {
                break;
            }

            if (orderedArray[i] > arrElement) {
                orderedArray.splice(i, 0, arrElement);
                break;
            }

            orderedArray.length === i+1 && orderedArray.push(arrElement);
        }

    }

    return orderedArray;
}