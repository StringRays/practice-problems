//validates phone numbers against specific use cases for freecodecamp final project
function telephoneCheck(str) {
    //splits string into array of individual characters
    let newArr = str.split("");
    let answer = true; 
    let nextThree;
   
    //checks if the string is too big or small,  returns false if so
    answer = checkLength(newArr);
    if (answer == false) {
      return answer;
    }

    //if length is 10, returns true if numbers and false if not
    if (newArr.length == 10) {
        return areNumbers(newArr);
    }
  
    //checks if the last four digits are numbers, and returns false if not
    answer = areNumbers(newArr.slice(-4));
    if (answer == false) {
      return false;
    }
    newArr = newArr.splice(0,(newArr.length-4));
  
    //if the next from right is a space or dash, checks the three numbers after to see if they are numbers, Returns false if not
    if (newArr[newArr.length-1] == " " || newArr[newArr.length-1] == "-" ) {
      nextThree = newArr.slice(newArr.length-4, newArr.length-1);
      answer = areNumbers(nextThree);
      if (answer == false) {
      return false;
      }
      //creates array of only number left to check
      newArr = newArr.splice(0,(newArr.length-4));
    }
    // otherwise checks if the next index holds a number, and checks the two after if so, returning false if not true. Removes three numbers
    else if ( /[0-9]/g.test(newArr[newArr.length-1])) {
      nextThree = newArr.slice(newArr.length-3, newArr.length);
      answer = areNumbers(nextThree);
      if (answer == false) {
      return false;
      }
      newArr = newArr.splice(0,(newArr.length-3));
    } 
    else {
      return false;
    }
  
    //checks if next index is dash or space, if so checking for parantheses and then numbers between
    if (newArr[newArr.length-1] == " " || newArr[newArr.length-1] == "-" ) {
      if (newArr[newArr.length-2] == ")") {
        if (newArr.length > 5 && newArr[newArr.length-6] == "(") {
          //if present, removes last 6, otherwise returns false
          nextThree = newArr.slice(newArr.length-5, newArr.length-2);
          answer = areNumbers(nextThree);
          if (answer == false) {
          return false;
         } else { 
         newArr = newArr.splice(0,(newArr.length-6));
         }
        }
        else {
          return false;
        }
      }
  
      //if no parantheses, checks three indexes and removes last four if all are numbers
      else {
        nextThree = newArr.slice(newArr.length-4, newArr.length-1);
        answer = areNumbers(nextThree);
        if (answer == false) {
          return false;
        } 
        else {
        newArr = newArr.splice(0,(newArr.length-4))
        }
      }  
    }
  
  //checks if next index is parantheses
    else if (newArr[newArr.length-1] == ")") {
     if (newArr[newArr.length-5] == "(") {
       nextThree = newArr.slice(newArr.length-4, newArr.length-1);
       answer = areNumbers(nextThree);
       if (answer == false) {
          return false;
        }   
        if (newArr.length == 5) {
          return true;
        }   
        newArr = newArr.splice(0,(newArr.length-5));
     }
   } else {
     return false;
   }
  //if all numbers have been removed
  if (newArr.length == 0 ) {
    return true;
  }
  //checks for possible first number combos, returns false if none are present
  else if (newArr.length == 2) {
     if ( newArr[0] == 1 && newArr[1] == " " ) {
       return true;
     }
     return false;
   } else if (newArr.length == 1) {
     if (newArr[0] == 1) {
       return true;
     }
     return false;
   } else {
     return false;
   }
  }
  
  //checks if arr is in correct length range
  function checkLength(arr) {
    return (arr.length > 16) ? false : (arr.length < 9) ? false: true;
  }
  
  function areNumbers(arr) {
    for ( let i = 0; i< arr.length; i++) {
      return (/[0-9]/g.test(arr[i])) ? true : false;
    }
   }
  
  console.log(telephoneCheck("2(757)6227382"))