function palindrome(str) {
    let newRegex = /[a-z]|[0-9]/gi;
    //sets all letters to lowercase. 
    str = str.toLowerCase();
    //makes an array of the letters and numbers in given string
    let newArr =str.match(newRegex)
    let answer = true;
    let lastIndex = newArr.length-1;
    //iterates through the first half array, checks if the letter is equal to the last, then both checks second and second to last, etc. 
    let iter = 0;
     while ( iter <= (newArr.length/2) ) {
      if ( newArr[iter] == newArr[lastIndex] ) {
        answer = true;
        lastIndex--;
        iter++;
      } 
      //if any are not equal, changes answer to false and returns answer
      else {
        answer = false;
        break;
      }
    }  
    return answer;
  }
  
  palindrome("A man, a plan, a canal. Panama");