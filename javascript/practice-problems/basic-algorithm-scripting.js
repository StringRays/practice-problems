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