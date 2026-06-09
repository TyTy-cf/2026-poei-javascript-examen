window.addEventListener('load',()=>{
    console.log(countWords("Vive l'algorithmie avec Javascript !"));
    console.log(getBankNotes(130));
    console.log(mergeArrays([1, 7, 4, 10],[2, 8, 3]));
})


function countWords(str){
    let alphabet = ['a','b','c','d','e','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','-'];
    let words = 0;
    for (let i = 0; i < str.length; i++) {
        if(existsInArray(str[i],alphabet)){
            words++;
            for (let j = i; j < str.length; j++) {
                if (existsInArray(str[j],alphabet)){
                    i++;
                }else{
                    j=str.length;
                }
            }
        }
    }
    return words;
}

function existsInArray(element, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            return true;
        }
    }
    return false;
}

function getBankNotes(amount){
    if (amount < 10){
        return ("Montant invalide, les billets de moins de 10€ n'existent pas.");
    }
    let cinquante = 0;
    while(amount>50){
        cinquante++;
        amount -= 50;
    }
    let vingt = 0;
    while(amount>20){
        vingt++;
        amount -= 20
    }
    let dix = 0;
    if (amount >= 10){
        dix = 1;
    }
    return (cinquante + " billet(s) de 50€ ; " + vingt + " billet(s) de 20€ ; " + dix + " billet(s) de 10€");
}

function mergeArrays(arr1,arr2){
    if (arr1.length === 0){
        return arr2;
    }
    let newArr = [];
    let max = 0;
    for (let i = 0; i < arr1.length; i++) {
        if (max<arr1[i]){
            max = arr1[i];
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        if (max<arr2[i]){
            max = arr2[i];
        }
    }
    while (newArr.length !== (arr1.length + arr2.length)){
        let min = max;
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] < min && !existsInArray(arr1[i],newArr)){
                min = arr1[i];
            }
        }
        for (let i = 0; i < arr2.length; i++) {
            if (arr2[i] < min && !existsInArray(arr2[i],newArr)){
                min = arr2[i];
            }
        }
        newArr.push(min);
    }
    return newArr;
}