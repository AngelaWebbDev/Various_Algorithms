//print all integers from 1 to 255
function print1to255 () {
    for(var i=1; i<256; i++)
        console.log(i)
}
//print1to255()

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
//print integers from 0 to 255, and with each integer print the sum so far
function printIntsAndSum0To255() {
    var sum=0;
    console.log('printIntsAndSum0To255 Javascript: ');
    for(var i=1;i<256;i++){
        sum+=i;
        console.log(i, " " , sum);
    }
}
//printIntsAndSum0To255()

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
//Given an array, find and print its largest element.
function findAndPrintMax(arr){
    let max = arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){max = arr[i]}
    }
    return max;
}
//console.log(findAndPrintMax([1,11,2,22,3,.33,4,.04]))

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
//Create an array with all the odd integers between 1 and 255 (inclusive)
function arrayWithOdds(){
    let odds = [];
    for(let i=1;i<=255;i++){
        odds.push(i)
    }
    return odds
}
//console.log(arrayWithOdds())

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
//Given an array and a value Y, count and print the number of array values greater than Y.
function greaterThanY(arr,y){
    let counter = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>y){
            console.log(arr[i],' ');
            counter++;
        }
    }
    return counter;
}
// count = greaterThanY([1,11,2,22,3,.33,4,.04],2)
// console.log('total: ', count)

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
//Given an array, print the max, min and average values for that array
function maxMinAvg(arr){
    let max = arr[0]
    let min = arr[0]
    let totalAdd = arr[0]
    for(let i=1;i<arr.length;i++){
        if(arr[i]>max){max = arr[i]}
        else if(arr[i]<min){min = arr[i]}
        totalAdd += arr[i]
    }
    let avg = totalAdd/arr.length;
    console.log('max: ', max);
    console.log('min: ', min);
    console.log('average: ', avg);
}
//maxMinAvg([2,1,3]) //output:3,1,2
//maxMinAvg([1,11,2,22,3,.33,4,.04]) //output:22,.04,5.42125

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
//Replace any negative array values with 'Dojo'
function swapNegativesWithString(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]<0){arr[i] = 'Dojo'}
    }
    return arr;
}
//console.log(swapNegativesWithString([1,-1,2,-22,3,-.33,4,.04]))

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
//Print all odd integers from 1 to 255
function printOdds(){
    for(let i=1;i<=255;i++){
        console.log(i)
    }
}
//printOdds()

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
//Iterate through a given array, printing each value
function iteratePrintArray(arr){
    arr.forEach(item => {
        console.log(item)
    });
}
//iteratePrintArray([1,'one',[2,'two'],[3,['three','III']]])

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
//Analyze an array’s values and print the average
function getPrintAvg(arr){
    let addTotal = 0;
    let counter = 0;
    arr.forEach(item => {
        if((typeof item) == 'number'){
            addTotal += item;
            counter++;
        }
    })
    if(counter>0){return addTotal/counter}
    else{return 'no numbers in this array'}
    
}
// console.log(getPrintAvg([1,2,3,4,5,6,7,8,9,10]))
// myVar = 3
// console.log(getPrintAvg([1,'one',2,[2,2],myVar]))
// console.log(getPrintAvg(['one','two','three']))

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
//Square each value in a given array, returning that same array with changed values.
function squareValues(arr){
    index = 0;
    arr.forEach(value => {
        arr[index] = value*value;
        index++;
    });
    return arr;
}
// console.log(squareValues([1,2,3,4,5]))

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
//Return the given array, after setting any negative values to zero.
function zeroOutNegatives(arr){
    index = 0;
    arr.forEach(value => {
        if(value<0){arr[index] = 0;}
        index++;
    });
    return arr
}
// console.log(zeroOutNegatives([1,-2,3.3,-.04]))

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
//Given an array, move all values forward by one index, dropping the first and leaving a '0'​ value at the end
function shiftArrayValues(arr){
    for(let i=0;i<arr.length;i++){
        if(i<arr.length-1){
            arr[i] = arr[i+1]
        }else{
            arr[i] = 0
        }
    }
    return arr
}
// console.log(shiftArrayValues([1,2,3,4,5]))

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
//Implement a function sigma(num)​ that, given a
// number, returns the sum of all positive integers
// from 1 up to number (inclusive)
function sigma(num){
    let sum = 0;
    if(num<2){return 0;};
    for(let i=2;i<=num;i+=2){sum+=i};
    return sum;
}
// console.log(sigma(5)) //expected output: 6
// console.log(sigma(1)) //expected output:0
// console.log(sigma(10)) //expected output:20

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
// function factorial(num)​ that, given a number, returns the product (multiplication) of all positive integers from 1 up to number (inclusive)
function factorial(num){
    if(num<0){return 'positive numbers only'}
    else if(num==0){return 0}
    else if(num==1){return 1}
    else{
        let sum = 1;
        for(let i=1;i<=num;i++){
            sum*=i;
        }
        return sum
    }
}
// console.log(factorial(-3))//expected output:positive numbers only
// console.log(factorial(0)) //expected output: 0
// console.log(factorial(1)) //expected output: 1
// console.log(factorial(3)) //expected output:6

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
// function ThreesFives()​ that adds each value from 100 and 4000000 (inclusive) if that value is evenly divisible by 3 or 5 but not both. Display the final sum in the console
function threesAndFives(){
    let i=100;
    let sum = 0;
    while(i<=4000000){
        if(i%3==0 || i%5==0){
            if(i%3!=0 || i%5!=0){
                sum+=i
            }
        }
        i++;
    }
    return sum
}
// console.log(threesAndFives())

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
//​ Change your function to make a BetterThreesFives(start,end)​where start and end  values are customizable
function BetterThreesFives(start, end){
    let i = start;
    let sum = 0;
    while(i<=end){
        if(i%3==0 || i%5==0){
            if(i%3!=0 || i%5!=0){
                sum+=i
            }
        }
        i++;        
    }
    return sum
}
// console.log(BetterThreesFives(1,15)) //expected output:45

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
//Implement generateCoinChange(cents)​ that accepts a parameter for the number of cents, and computes how to represent that amount with the smallest number of coins. Console.log the result
function generateCoinChange(cents){
    if(cents<=0){
        console.log('no change due');
        return 'error'
    }else if(cents%1>0){
        console.log('cents must be a whole number');
        return 'error'
    }else{
        let quarters = Math.floor(cents/25);
        if(quarters>0 && quarters !=1){
            console.log(quarters, ' quarters')
        }
        if(quarters==1){
            console.log('1 quarter')
        }
        cents = cents - (quarters * 25)
        let dimes = Math.floor(cents/10);
        if(dimes>0 && dimes != 1){
            console.log(dimes, ' dimes');
        }
        if(dimes==1){
            console.log('1 dime')
        }
        cents = cents - (dimes * 10)
        let nickels = Math.floor(cents/5);
        if(nickels>0 && nickels != 1){
            console.log(nickels, ' nickels')
        }
        if(nickels==1){
            console.log('1 nickel')
        }
        cents = cents - (nickels * 5)
        if(cents>0 && cents != 1){
            console.log(cents, ' pennies')
        }
        if(cents==1){
            console.log('1 penny')
        }
    }
}
// console.log('-2:')
// generateCoinChange(-2) //expected output: no change due
// console.log('1.23:')
// generateCoinChange(1.23) //expected output: cents must be a whole number
// console.log('4:')
// generateCoinChange(4) //expected output:4 pennies
// console.log('7: ')
// generateCoinChange(7) //expected output:1 nickel, 2 pennies
// console.log('16: ')
// generateCoinChange(16) //expected output: 1 dime, 1 nickel, 1 penny
// console.log('41:')
// generateCoinChange(41) //expected output:1 quarter, 1 dime, 1 nickel, 1 penny
// console.log('79: ')
// generateCoinChange(79) //expected output:2 quarters, 2 dimes, 1 nickel, 4 pennies
// console.log('32:')
// generateCoinChange(32) //expected output:1 quarter, 1 nickel, 2 pennies
// console.log('21:')
// generateCoinChange(21) //expected output:2 dimes, 1 penny
// console.log('46:')
// generateCoinChange(46) //expected output: 1 quarter, 2 dimes, 1 penny

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
// Implement a ‘die’ that randomly returns an integer between 1 and 6 inclusive. Roll a pair of these dice, tracking the statistics until doubles are rolled. Display the number of rolls, min, max, and average

let numOfRolls = 0
let minRoll = 1
let maxRoll = 0
let rollArray = []
let averageRoll = 0

function statisticsToDoubles(){
    let doubles = false
    while(doubles==false){
        let roll1 = oneDie()
        let roll2 = oneDie()
        numOfRolls += 1
        minRoll = Math.min(roll1, roll2, minRoll)
        maxRoll = Math.max(roll1, roll2, maxRoll)
        rollArray.push([roll1, roll2])
        if(roll1==roll2){
            doubles = true;
        }
    }
    let totalRolls = 0
    rollArray.forEach(roll => {
        roll.forEach(die=>{
            totalRolls += die
        })
        
    });
    console.log('totalRolls: ', totalRolls, typeof(totalRolls))
    console.log('numOfRolls: ', numOfRolls, typeof(numOfRolls))
    // totalRolls = parseInt(totalRolls)
    // numOfRolls = parseInt(numOfRolls)
    averageRoll = totalRolls/numOfRolls
    // averageRoll = Math.round((totalRolls/(numOfRolls)*100)/100)
}

function oneDie(){ //whatever Math is assigned here applies to all subsequent calculations
    //random number in range: Math.random() * (max-min) + min
    
    // return (Math.trunc(Math.random() * 5 + 1))
    
    return Math.round((Math.random()*5+1))
}

// statisticsToDoubles()
// console.log('numOfRolls: ', numOfRolls)
// console.log('minRoll: ', minRoll)
// console.log('maxRoll: ', maxRoll)
// console.log('rollArray: ', rollArray) //for testing only
// console.log('averageRoll: ', Math.round(averageRoll, 2))

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
// implement function that, given a number,
// sums that number's digits repeatedly
// until sum is only one digit
// return final one digit result

function sumToOneDigit(num){
    let sum = 0;
    if(num.toString().length==1){return num};
    while(num.toString().length>1){
        for(let i=0;i<num.toString().length;i++){
            digit = num.toString().charAt(i);
            if(Number(digit)){sum += Number(digit)}
        }
        if(sum.toString().length>1){num = sum;
                                    sum = 0;
        }else{
            return sum;
        }
    }
}
// console.log(sumToOneDigit(12)) //expected output: 3
// console.log(sumToOneDigit(1.23)) //expected output: 6
// console.log(sumToOneDigit(1234567)) //expected output: 1


///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
//implement fibonacci(num) that accepts a number
//and returns which ordinal place it exists at in the fibonacci sequence
//if the number is not in fibonacci sequence, return "not a fibonacci number"

function fibonacci1(num){
    if(num<0){return 'No negatives in Fibonacci'}
    if(num%1>0){return 'No decimals in Fibonacci'}
    if(num==0){return 1}
    if(num==1){return 2}
    counter1 = 0;
    counter2 = 1;
    for(let i=1;i<=num;i++){
        temp = counter2
        counter2 = counter1 + counter2
        counter1 = temp
        if(counter2==num){return i+2}
    }
    return 'Not in Fibonacci Sequence'
}
//fibonacci: 0 1 1 2 3 5 8 13 21 34 55 89
// console.log(fibonacci1(89)) //output: 12
// console.log(fibonacci1(-3)) //output: no negatives
// console.log(fibonacci1(1.2)) //output: no decimals
// console.log(fibonacci1(0)) //output: 1

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
//implement fibonacci(place) that accepts a number
//and returns which number is at that place in the fibonacci list
//if the number is not in fibonacci sequence, return "not a fibonacci number"

function fibonacci2(place){
    if(place<1){return 'Place number cannot be less than 1'}
    if(place%1>0){return 'Place number must be a whole number'}
    if(place==1){return 0}
    counter1 = 0;
    counter2 = 1;
    for(let i=2;i<=place;i++){
        temp = counter2
        counter2 = counter1 + counter2
        counter1 = temp
    }
    return counter1
}
//fibonacci: 0 1 1 2 3 5 8 13 21 34 55 89
// console.log(fibonacci2(-3)) //output: can't be <1
// console.log(fibonacci2(1.2)) //output: no decimals
// console.log(fibonacci2(0)) //output: can't be <1
// console.log(fibonacci2(1)) //output: 0
// console.log(fibonacci2(8)) //output: 13
// console.log(fibonacci2(12)) //output: 89

// accept 2 non-negative integers as args
// return last digit of a raised to exponent b
function lastDigitAtoB(a,b){
    if(b<0 || a<0){
        return 'both numbers must be at least zero'
    }
    if(b==1){
        return a%10
    }
    let quotient = a
    for(let i=2;i==b;i++){
        quotient *= a
    }
    return quotient%10
}
// console.log(lastDigitAtoB(32,1)) //2
// console.log(lastDigitAtoB(-1,1)) //both numbers must be at least zero
// console.log(lastDigitAtoB(2,-4)) //both numbers must be at least zero
// console.log(lastDigitAtoB(-3,-6)) //both numbers must be at least zero
// console.log(lastDigitAtoB(12,5)) //2
// console.log(lastDigitAtoB(3,4)) //1

//given number of seconds since 12:00:00
//print the angles (in degrees) of the hour, minute, and second hands
//12 is 0 degrees
//assumption not stated in challenge: minute & hour hands glide while second hand jumps
function clockHandAngles(seconds){
    if(seconds<0){return 'Time can only move forward. \n'}
    //num of seconds = seconds%60 (every 60 it resets to 0 deg)
    let sec = (seconds%60)
    //num of minutes = (previous results)/60, then %60 (every 3600, it resets to 0 deg)
    seconds -= sec
    let min = (seconds/60%60)
    //num of hours = (previous results)/3600
    seconds -= (min * 60)
    let hour = seconds/3600
    //second hand = 6 deg per second
    let secondhandangle = sec * 6
    //minute hand = 0.1 deg per second
    let minutehandangle = ((min*60)*0.1)
    //hour hand = 30 deg per hour + 0.5 deg per minute
    let hourhandangle = (hour * 30)
    hourhandangle = ((hour * 30) + (min * 0.5))

    console.log(sec, ' seconds = ', secondhandangle, ' degrees')
    console.log(min, ' minutes = ', minutehandangle, ' degrees')
    console.log((hour + (Math.round((min/60)*100))/100), ' hours = ', hourhandangle, ' degrees')
    return ' '
}

// console.log('-100 seconds (N/A): ')
// console.log(clockHandAngles(-100)) //output: Time can only move forward

// console.log('15 seconds (00:00:15):')
// console.log(clockHandAngles(15))

// console.log('30 seconds (00:00:30):')
// console.log(clockHandAngles(30))

// console.log('60 seconds (00:01:00):')
// console.log(clockHandAngles(60))

// console.log('300 seconds (00:05:00)):')
// console.log(clockHandAngles(300))

// console.log('21,600 seconds (06:00:00):')
// console.log(clockHandAngles(21600))

// console.log('23,400 seconds (06:30:00):')
// console.log(clockHandAngles(23400))

// console.log('23,415 seconds (06:30:15):')
// console.log(clockHandAngles(23415))

//given an array & an additional value,
//insert this value at the beginning of the array
//no built-in array methods
function pushFront(arr, value){
    newArr = [value];
    for(let i=0;i<arr.length;i++){
        newArr[i+1] = arr[i]
    }
    return newArr
}
// console.log(pushFront([1,2,3], 4))
// console.log(pushFront([1,2,3,4], 0))

//given an array, remove/return value at [0]
//only allowed built-in method: pop
function popFront(arr){
    let firstValue = arr[0]
    let newArr = []
    for(let i=1;i<arr.length;i++){
        newArr[i-1] = arr[i]
    }
    arr = newArr
    return firstValue
}
console.log(popFront([1,2,3]))