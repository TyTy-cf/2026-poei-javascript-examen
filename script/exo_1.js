// 1.1 Compter les mots d'une phrase



function countWords(str) {
  str= str.toLowerCase();

  let numberWords = 0;

  for (const letter in str){
   
    if(letter ===''){
       numberWords += 1;
    }

    }
    return numberWords;

  }
   
  //console.log(countWords("Ceci est une phrase de test") );


  


console.log(countWords("Ceci est une phrase de test"));

//  1.2 Le distributeur de billets

function getBanknotes(amount) {
  let StrResult = "";
  
  let centBillet = Math.floor(amount /50);
  let  vingtBillet = Math.floor((amount % 50)/20);
   




  return StrResult;
}

//  1.3 La fusion de tableaux triés

fu

function mergeArrays(arr1, arr2) {
  let arrayResult = [];
  
  for (let i = 0; i < arr2.length; i++) {
    arr1.push(arr2[i]);
     

  }

  return arrayResult;
}

