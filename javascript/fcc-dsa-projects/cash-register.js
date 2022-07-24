const checkCashRegister = function(price, cash, cid) {

    const answerObj = {
    };
    //gets the change needed in dollars
    let change = (cash - price);
    //sum cash in drawer in dollars
    let sumCID = cid.flat().filter(elem => (typeof elem == 'number')).reduce((elemOne, elemTwo) => elemOne + elemTwo, 0).toFixed(2);
  
    let changeArray = [.01, .05, .10, .25, 1, 5, 10, 20, 100];
  
    let answerChange = [];
    //finds the largest currency value less than the change needed
    const endIndex = (change > 100) ? 8 : changeArray.findIndex((elem) =>  change/elem < 1);
   
    //if the change needed equals the cash in drawer, returns required result
    if ( sumCID == change ){
      answerObj['status'] = "CLOSED";
      answerObj['change'] = cid;
      return answerObj;
    }
   
   /*Starting at largest bill, that is less than change needed, iterates through the values.
    At each bill value, while the change value is greater than that bill value, 
    adds that bill value to a counter while subtracting it from the cash register drawer
    and from the change needed value. Finally, pushes the non zero values onto an answer array*/
    for (let i = endIndex-1; i > 0; i--) {
      let counter = 0;
      while (change >= changeArray[i] && cid[i][1] > 0) {
        counter += 1;
        cid[i][1] -= changeArray[i];
        change -= changeArray[i];
      }
      if (counter != 0) {
        answerChange.push([cid[i][0], counter*changeArray[i]]);
        counter = 0;
      }
    }
    
    if (change != 0) {
    let counter = 0;
    while (change > changeArray[0] && cid[0][1] > 0) {
        counter += 1;
        cid[0][1] -= parseInt(changeArray[0]*100)/100;
        change -= changeArray[0];
      }
      counter += 1;
      change -= changeArray[0];
      if (counter != 0) {
        answerChange.push([cid[0][0], counter*changeArray[0]]);
        counter = 0;
      }
    }
  
  //sets output for insufficient or incorrect change (project requirements)
    if ( sumCID < change || change >= .01 ) {
      answerObj['status'] = "INSUFFICIENT_FUNDS";
      answerObj['change'] = [];
    } else {
      answerObj['status'] = "OPEN";
      answerObj['change'] = answerChange;
    }
    
    return answerObj;
  };
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));