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








//takes multiple arrays and returns array of unique values in original order
function uniteUnique(arr) {
  //initializes answer variable
  let newArr=[];
  //iterates through all given arrays
  for ( let i = 0; i < arguments.length; i++ ) {
    //iterates through length of each array
    for ( let j = 0; j < arguments[i].length; j++ ) {
      //if the answer array does not include the current number, pushes it onto the end
      if ( newArr.includes(arguments[i][j]) == false ) {
      newArr.push(arguments[i][j]);
      }
    }
  }
  return newArr
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);








//Takes a number greater than or equal to 1 and returns sum of all odd Fibonnaci numbers less than that number
function sumFibs(num) {
  //sets fibs equal to answer array for one
  let fibs = [1, 1];
  //iterates through numbers from two to given number
  for ( let i = 2; i <= num; i++ ) {
    //if the current number is equal to the sum of the last two nums in answer array, push number onto answer array
    if ( i == (fibs[fibs.length-1]+fibs[fibs.length-2])) {
     fibs.push(i);
    }
  }
  //sets final answer array to only the odd values from first answer array
  const finalArray = fibs.filter(fib => fib%2 === 1)
  let sum = 0;
  //sets final answer equal to the sum of the numbers in the final array
  const finalSum = finalArray.reduce((previousNum, newNum) =>  previousNum + newNum, sum)
  return finalSum;
}

sumFibs(10);







//Finds smallest common multiple of two numbers that is also divisible by the numbers between them 
function smallestCommons(arr) {
  //initializes variables since numbers can be given in either order
  let bigNum;
  let smallNum;
  //sets smallNum to smaller number and bigNum to bigger number
  if (arr[0] === arr[1]) {
    return arr[0]
  } else if (arr[0] > arr[1]) {
    bigNum = arr[0];
    smallNum = arr[1];
    return getLcm(smallNum, bigNum);
  } else {
    bigNum = arr[1];
    smallNum = arr[0]; 
    return getLcm(smallNum, bigNum);
  }
}
//gets the least common multiple (as defined by problem)
function getLcm(small, big) {
  //iterates through starting with a the product of the two, then adding that number with each iteration
  let startNum = small*big;
  //iterates until arrAllDivisible returns true, returns value to smallestCommons
  while (areAllDivisible(startNum, small, big) === false) {
    startNum += small*big;
  }
  return startNum;
}
//checks if value is divisible by all values in range between numbers
function areAllDivisible(startNum, small, big) {
  let answer = true;
  
  //if any of the numbers in the range are not divisible, returns false, otherwise returns true
  for ( let i = small+1; i < big; i++ ) {
    if (startNum%i === 0) {
      continue
    } else {
      answer = false;
    }
  }
  return answer;
}

smallestCommons([1,5]);







//converts html entities into their html entities
function convertHTML(str) {
  
  let newStr = str.replaceAll("&", "&amp;");
  newStr = newStr.replaceAll('<', "&lt;");
  newStr = newStr.replaceAll('>', "&gt;");
  newStr = newStr.replaceAll("\'", '&apos;');
  newStr = newStr.replaceAll('\"', '&quot;');
  return newStr;
}

convertHTML("Dolce & Gabbana");







/*Create a function that sums two arguments together. If only one argument is provided
provides return a function that expects one argument and returns the sum.*/
function addTogether() {
  //declares an undefined answer variable
  let answer;
  //returns undefined if any of the arguments are not numbers
  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] != 'number') {
      return answer;
    } 
  }
  //if only one argument is provided, returns a function that will check if the next number is a number and add it to itself if so
  if ( arguments.length === 1 ) {
    let firstNum = arguments[0]
    answer = function(num) {
      if (typeof num != 'number') {
      return undefined;
    }
      return num + firstNum;
    }
  } 
  //returns the two numbers added together if two numbers are provided as arguments
  else {
    answer = arguments[0] + arguments[1];
  }
  return answer
}

console.log(addTogether(2)([3]));