window.addEventListener('load', () => {
    // console.log( countWord("Vive l'algorithmie avec Javascript !"))
    console.log( getBanknotes(190))
    mergeArray([1, 7, 4,3],[1,2, 8, 3])

})


function countWords(str) {
    let result = 1;
    const stringArray = Array.from(str)

    for (const letter of stringArray) {
        if (letter === ' ')
            result++
    }
    return result
}

function getBanknotes(amount) {


    if (amount % 10 !== 0)
        return "Montant invalide, les billets de moins de 10€ n'existent pas."

    let result = ''

    let billet = Math.floor(amount / 50)
    let reste = amount%50;

    result = `${billet} billet(s) de 50$; `
    if(reste > 0 )
    {
        billet = Math.floor(reste / 20)
        result += `${billet} billet(s) de 20$;`
        reste = reste%20;
    }
    if(reste> 0)
    {
        billet = Math.floor(reste / 10)
        result += `${billet} billet(s) de 10$ `
    }
    return result
}

function  mergeArray(arr1,arr2)
{
    const arrayResult =[]

    for (const value of arr1)
        arrayResult.push(value)

    for(const value of arr2)
    {
        if(!arrayResult.includes(value)) // pas interdit dans la consigne :)
            arrayResult.push(value)
    }

    sortArray(arrayResult)
    console.log(arrayResult)
}

function  sortArray(array) {
    let temp = ""
    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1]) {
            [array[i], array[i + 1]] = [array[i + 1], array[i]]
            i = 0
        }
    }
}


