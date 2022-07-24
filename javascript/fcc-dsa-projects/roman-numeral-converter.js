/*Starts at highest to lowest value. For numbers that could go in multiple times, implements for loop.
Pushes the correct Roman numberal onto answerArray, and returns answerArray joined as string at the end*/
function convertToRoman(num) {
    let answerArr = []; 
    let thousands = Math.floor(num/1000);
    if (num >= 1000) {
     for (let iter = 0; iter < thousands; iter++) {
       answerArr.push('M')
     }
     num -= thousands*1000;
    }
    if (num >= 900) {
      answerArr.push('CM');
      num -= 900; 
    }
    if (num >= 500) {
      answerArr.push('D');
      num -= 500;
    }
    if (num >= 400) {
      answerArr.push('CD');
      num -= 400;
    }
    if (num >= 100) {
      for (let count = 0; count < Math.floor(num/100); count++) {
        answerArr.push('C');
      }
      num -= (Math.floor(num/100)*100)
    }
     if (num >= 90) {
      answerArr.push('XC');
      num -= 90; 
    }
    if (num >= 50) {
      answerArr.push('L');
      num -= 50;
    }
    if (num >= 40) {
      answerArr.push('XL');
      num -= 40;
    }
    if (num >= 10) {
      for (let count = 0; count < Math.floor(num/10); count++) {
        answerArr.push('X');
      }
      num -= (Math.floor(num/10)*10)
    }
     if (num >= 9) {
      answerArr.push('IX');
      num -= 9; 
    }
    if (num >= 5) {
      answerArr.push('V');
      num -= 5;
    }
    if (num >= 4) {
      answerArr.push('IV');
      num -= 4;
    }
    if (num >= 1) {
      for (let count = 0; count < num; count++) {
        answerArr.push('I');
      }
      num -= num;
    }
    let numString = answerArr.join('');
    
    return numString;
   }
   
   convertToRoman(649);