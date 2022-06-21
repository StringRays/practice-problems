//Takes a celsius input and returns a value in fahrenheit
function convertToF(celsius) {
    //below line is the formula for converting celsius to fahrenheit
    let fahrenheit = ((9*celsius)/5) + 32;
    return fahrenheit;
  }
  
  convertToF(30); //change '30' to any celsius value


//Takes a string as input and reverses it 
function reverseString(str) {
  //initializes an empty array
  let newStrArr = [];
  //initializes an empty string 
  let newStr = "";
  //starting at end of input string, puts each letter at the end of the array created earlier
  for (let i = (str.length-1); i >= 0; i--) {
      newStrArr.push(str[i]);
  }
  //takes the created (reversed) array and adds each element to the empty string created earlier
  for (let j = 0; j < str.length; j++) {
    newStr += newStrArr[j]; 
  }
  //returns the new string, a reversed version of the input string
  return newStr;
}

reverseString("hello");


// Takes an integer 0 or greater and returns its factorial
function factorialize(num) {
    //sets answer variable equal to input
    let numFactorial = num;
    //if input is 0, sets answer equal to 1
    if ( numFactorial == 0 ) {
      numFactorial = 1;
    } else {
        //takes initial value, and multiples it by one less than itself until that value equals zero
        for  (let i = (num-1); i > 0; i--) { 
          numFactorial = i * numFactorial;
          num--;
      }
    }
    //note: if num == 1, exits entire if loop and numFactorial stays equal to num
    return numFactorial;
  }
  factorialize(5);


  //Takes a sentence and finds the longest word
  function findLongestWordLength(str) {
    //initializes current count and longestWord variables
    let count = 0;
    let longestWord = 0;
  //iterates through the length of the entire string including whitespace
    for (let i = 0; i < str.length; i++) { 
        //for the blank spaces and the last letter
        if (str[i] === ' ' | i == str.length - 1 ) {
            //if the count variable is higher than the longestWord value
            if (count > longestWord) {
                //and 'i' is the last letter of the string, set the longestWord equal to count + 1
                if ( i == str.length -1 ) {
                    longestWord = count + 1;
                    //since that was the last letter, exits string
                    break;
                } 
                //otherwise, sets equal to count, sets count back equal to zero 
                longestWord = count;
                count = 0;
            }
            //count returns to zero even if count was lower than longestWord
            count = 0;
        } 
        //if str[i] was a letter, adds one to the count and continues the for loop
        else {
          count += 1;
        }
    }
    //returns final longest word
    console.log(longestWord);
    return longestWord;
  }
  
  findLongestWordLength("What if we try a super-long word such as otorhinolaryngology");
  
  //return an array consisting of the largest number from each of a povided sub-array 
  function largestOfFour(arr) {
    //initializes empty variable, and empty array 
    let arrMax;
    let arrMaxArray = [];
    //iterates through the array
    for (let i = 0;i < arr.length; i++) {
      //sets the variable equal to the first number
      let arrMax = arr[i][0];
      //iterates through subarray, then resets to the value at the first index of that array
      for (let j = 1;j < arr[i].length; j++) {
        //if the current value is greated than the variable value, replaces that value
        if (arr[i][j] > arrMax) { 
          arrMax = arr[i][j]; 
        } else { 
          continue; 
        }
      }
      //at the end of the subarray, pushes the variable value onto the end of the answer array
      arrMaxArray.push(arrMax);
    } 
    return arrMaxArray;
  }
  
  largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);


  //check if a string ends with a given target string
  function confirmEnding(str, target) {
    //initializes variables
    let answer = 0;
    let finalAnswer = false;
    let difference = str.length-target.length;
    //iterates through the last part of the string equal to the length of the target string
    for (let i = difference; i < str.length; i++) {
      let indexFinder = i - difference;
      //counts how many characters are equal in that loop
      if ( target[indexFinder] == str[i] ) {
        answer += 1;
      }
    }
    //if the count of equal letters equals the length of the target string, returns true 
    if ( answer == target.length ) {
      finalAnswer = true;
    } 
      return finalAnswer;
  }

  confirmEnding("Bastian", "n");


  //looks through a given array, and returns the first element that returns true when passed into the given function
  function findElement(arr, func) {
    //initializes variable
    let num;
    //iterates through array 
    for ( let i = 0; i < arr.length; i++ ) {
      //for each value, checks if value would return true
      if ( func(arr[i]) === true ) {
        //when it returns true, sets prior variable equal to it and exits loop
        num = arr[i];
        break;
      }
    } 
    return num;
  }
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);


//Returns string with the first letter of each word capitalized
function titleCase(str) {
  //initializes answer variable
  let answer = "";
  //iterates through the string
  for (let i = 0; i < str.length; i++ ) {
    //for the first letter of each string, adds that character in upper case
    if ( i == 0 | str[i-1] == " " ) {
      answer = answer + str.charAt(i).toUpperCase();
    //for all the other characters, adds that character in lower case
    } else {
      answer += str.charAt(i).toLowerCase();
    }
  }  
  return answer;
}

titleCase("I'm a little tea pot");


//Copies each element of first array into the second array at index "n"
function frankenSplice(arr1, arr2, n) {
  //initializes empty array
  let newArr = [];
  //iterates through the number of elements equal to both arrays combined
  for ( let i = 0; i < ( arr1.length + arr2.length ); i++) {
    //for the indexes before "n", adds array 2's elements
    if ( i < n) {
      newArr.push(arr2[i]);
    } 
    //at the given index, adds arr1 elements one by one
    else if ( n <= i && i < ( arr1.length + n )) {
      newArr.push(arr1[i - n]);
    } 
    //after that, adds the rest of arr2
    else {
      newArr.push(arr2[i - arr1.length]);
    }
  }
  //returns ending array  
  console.log(newArr)
  return newArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);



//removes given falsy values from an array
function bouncer(arr) {
  //sets iterator variable
  let i = 0;
  //iterates throuth length of the array
  while ( i < arr.length ) {
    if ( arr[i] == false | arr[i] === null | Number.isNaN(arr[i]) | arr[i] == undefined ) {
      //removes elements that are falsy
      arr.splice(i, 1);
      i--;
    }
  i++;
  }
return arr;
}

bouncer([false, null, 0, NaN, undefined, ""]);


//returns lowest index a value(num) should be stored at in arr once it is sorted
function getIndexToIns(arr, num) {
  //initializes answer variable
  let index = 0;
  //iterates through array 
  for  ( let i = 0; i < arr.length; i++ ) {
    //for every number less than the value, adds a number to answer variable
    if (arr[i] < num ) {
      index += 1;
    }
  }
  //returns the number of values less than num in arr, where num would be placed in a sorted array
  return index;
}

getIndexToIns([40, 60], 50);


//returns true if the first element of array contains all of the letters from the second
function mutation(arr) {
  //extracts both strings in lowercase
  let strOne=arr[0].toLowerCase();
  let strTwo=arr[1].toLowerCase();
  //initializes answer variable
  let answer;
  //iterates the letters in string two 
  for ( let i in strTwo ) {
    //initializes variable for letter equality
    let equal;
    //for the letters in the first string, checks if the current second letter string matches them
    for ( let j in strOne ) {
      equal = false;
      if (strTwo[i] == strOne[j]) {
        equal = true;
        //if one of the letters matches, exits and proceeds to the next letter in string two
        break;
      }
    }
    if (equal == false ) {
      answer=equal;
      //if no match was found for a letter, exits loop with a "false" answer
      break;
    } else {
      }
    //sets the answer to true if this was the last letter
    answer=equal;
  }
  return answer;
}

mutation(["hello", "Hello"]);


//breaks an array into groups the size of "size"
function chunkArrayInGroups(arr, size) {
  //initializes new array
  let newArr = [];
  //initializes arrays to hold the chunked arrays
  let middleArr = [];
  //iterates through original orray pulling values out until it is empty
  while ( arr.length >= 1 ) {
    //looks through original array in chunks the size of desired group
    for ( let i = 0; i < size; i++ ) {
        if (arr[0] == undefined) {
          //if array is empty, breaks
          break;
        } 
        //otherwise, put the first value in array on the end of the middle array
        else {
          middleArr.push(arr.shift());
        }
    }
    //pushes the chunked array onto the end of the answer array
    newArr.push(middleArr);
    //empties the middle variable to iterate through the loop again picking up the next element
    middleArr=[];
  }
  console.log(newArr)
  return newArr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);