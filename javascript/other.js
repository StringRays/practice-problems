//number one
function totalBasketballScore(freeThrows, midRange, threePointers) {
    //checks if all arguments are a number
        let i = 0;
        while (i < 3) {
            if (typeof arguments[i] !== 'number') {
                console.log("All entries must be numbers.");
                break;
            }
            i++;
        }
        //returns score otherwise
        return freeThrows + midRange*2 + threePointers*3;
    }
    
    totalBasketballScore(2, 3, 4)
    
    
 //number two
function itemPrice(item) {
    //checks item type
    if (typeof item !== 'string') {
    console.log("All entries must be of type string");
     }
    switch(item){
        case 'computer': 
            return '$500';
            break;
        case 'mouse': 
            return  '$10';            
            break;
        case 'tablet': 
            return '$250';
            break;
        case 'case': 
            return  '$25';
            break;
        case 'router': 
            return  '$100';
            break;
        default:
            console.log('Item not in store');
        }
    }
    itemPrice('mouse')
    
    
//problem three
function randomRestaurant(numOfRestaurants) {
    let restaurants = ['Applebees', "Panera Bread", "Popeyes", "Chopt", "Chick-fil-A", "Cheesecake Factory", "Five Guys"];
    let randomRestaurantList = [];
    //pushes a random restaurant from the list onto the random list the number of times of the input number
    for (let count = 0; count < numOfRestaurants; count++) {
            randomRestaurantList.push(restaurants[Math.round(Math.random()*restaurants.length)]);
        }
    return randomRestaurantList;
 }
    
    randomRestaurant(55);
    
    
    
//problem four
function isLeapYear(year) {
    //if year is divisible by 100, checks if divisible by 400
    if (year%100 ==0 ){
        if (year%400 ==0) {
            return true;
        }
        return false;
    } 
    //Otherwise, checks if divisible by 4
    else if (year%4 ==0) {
        return true;
    } else {
        return false;
     }
    }
    
    isLeapYear(1976);