window.addEventListener('load', () => {
    //console.log(countWords("Vive l'algorithmie avec Javascript!"));
    console.log(getBanknotes());
})

function countWords (str){
    let count = 1;
    for ( const letter of str){
        if (letter === " " || letter === "'"){
            count += 1;
        }
    }
    return count;
}

function getBanknotes(amount ){
    if (amount % 10 != 0){
        return "Montant invalide, les billets de moins de 10€ n'existent pas."
    }
    let billets = [500, 200, 100, 50, 20, 10]

    for (let i = 0; i < billets.length; i++){
        let montantBillet = billets[i];
        billets[i] = Math.floor(amount/montantBillet);
        amount = amount % montantBillet;
    }
}

function mergeArrays(arr1, arr2){
    let newArr = [];
    for (let i = 0; i < arr1; i++){


        }
        if ()
    }
}
