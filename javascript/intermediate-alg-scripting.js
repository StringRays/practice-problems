//Sum All Numbers in a Range
function sumAll(arr) {
    //initializes answer variable
    let answer = 0;
    //sorts input array so asmaller number is first
    let sortedArr = arr.sort((a,b) => a-b);
    //sets variables to number range values
    let iterator = arr[0];
    let end = arr[1];
    //adds each number starting from the smaller and ending at the bigger 
    while ( iterator <= end ) {
      answer += iterator;
      iterator++;
    }
    return answer;
}
 
sumAll([1, 4]);








//Remove all elements from initial array that are of same value as additional arguments
function destroyer(arr) {
    //iterates through additional arguments past the given array 
    for ( let i = 1; i < arguments.length; i++) {
      //if the argument is in the array, removes it and repeats until false
      while ( arr.includes(arguments[i])==true ) {
        arr.splice(arr.indexOf(arguments[i]), 1);
        i--;
      }
    }
    return arr;
}
  
destroyer([1, 2, 3, 1, 2, 3], 2, 3);








//Symmetric difference of two arrays
function diffArray(arr1, arr2) { 
    let answer = finalAnswer(arr1, arr2);
    return answer;
}

//Makes arrays out of the unique items in each array, adds them together
function finalAnswer(array1, array2) {
  let firstUnique = pushUnique(array1, array2);
  let secondUnique = pushUnique(array2, array1);
  return firstUnique.concat(secondUnique);
}


//Takes two arrays and checks if any item in one is in the other, returns results in array
function pushUnique(x, y) {
  let halfAnswer = [];
  for ( let item in y ) {
    if ( x.includes(y[item]) == false ) {
      halfAnswer.push(y[item]);
    } 
  }
  return halfAnswer;
}


diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);