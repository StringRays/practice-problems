function rot13(str) {
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    //make an array of individual input characters
    let newArr = str.split("");
    let answerArr = [];
    //iterates through input array and adds any characters other than upper-case capital letters to the new Array as is
    for (let iter = 0; iter < newArr.length; iter++) {
      if (/[A-Z]/g.test(newArr[iter])===false) {
        answerArr.push(newArr[iter]);
      }
      //otherwise, adds the letter 13 characters away to the answer array
      else {
        if (alphabet.indexOf(newArr[iter]) > 12) {
          answerArr.push(alphabet[alphabet.indexOf(newArr[iter])-13]);
        } else {
          answerArr.push(alphabet[alphabet.indexOf(newArr[iter])+13]);
        }
      }
    }
    //returns string from characters in the final array
    let answerString = answerArr.join('');
    return answerString;
  }
  
  rot13("SERR PBQR PNZC");