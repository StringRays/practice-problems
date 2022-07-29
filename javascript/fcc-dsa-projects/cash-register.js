const checkCashRegister = function(price, cash, cid) {

  const answerObj = {
  };
  //gets the change needed in dollars
  let change = (cash - price);
  //sum cash in drawer in dollars
  let sumCID = cid.flat().filter(elem => (typeof elem == 'number')).reduce((elemOne, elemTwo) => elemOne + elemTwo, 0).toFixed(2);
console.log(change)
  let changeArray = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];
  //let changeArray = [.01, .05, .10, .25, 1.00, 5.00, 10.00, 20.00, 100.00];
  let answerChange = [];
  //finds the largest currency value less than the change needed
  const endIndex = ((change*100) > 10000) ? 8 : changeArray.findIndex((elem) =>  elem > change*100);
 
  //if the change needed equals the cash in drawer, returns required result
  if ( sumCID == change ){
    answerObj['status'] = "CLOSED";
    answerObj['change'] = cid;
    return answerObj;
  }
 
 /*Starting at largest bill that is less than change needed, iterates through the values.
  At each bill value, while the change value is greater than that bill value, 
  adds that bill value to a counter while subtracting it from the cash register drawer
  and from the change needed value. Finally, pushes the non zero values onto an answer array*/
  let counter = 0;
  let changeAmount = change*100;
  for (let i = endIndex; i >= 0; i--) {
    while (changeAmount >= changeArray[i] && cid[i][1] > 0) {
      counter += 1;
      cid[i][1] -= (changeArray[i]/100);
      changeAmount -= (changeArray[i]);
    }
    if (counter != 0) {
      answerChange.push([cid[i][0], counter*changeArray[i]/100]);
      counter = 0;
    }
  }

//sets output for insufficient or incorrect change (project requirements)
  if ( sumCID < change || changeAmount >= .01 ) {
    answerObj['status'] = "INSUFFICIENT_FUNDS";
    answerObj['change'] = [];
  } 
  else {
    answerObj['status'] = "OPEN";
    answerObj['change'] = answerChange;
  }
  return answerObj;
};

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));