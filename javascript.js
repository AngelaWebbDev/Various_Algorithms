//print all integers from 1 to 255
function print1to255 () {
    for(var i=1; i<256; i++)
        console.log(i)
}
//print1to255()

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

//Given an array, find and print its largest element.
function findAndPrintMax(arr){
    let max = arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){max = arr[i]}
    }
    return max;
}
//console.log(findAndPrintMax([1,11,2,22,3,.33,4,.04]))

//Create an array with all the odd integers between 1 and 255 (inclusive)
function arrayWithOdds(){
    let odds = [];
    for(let i=1;i<=255;i++){
        odds.push(i)
    }
    return odds
}
//console.log(arrayWithOdds())

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

//Replace any negative array values with 'Dojo'
function swapNegativesWithString(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]<0){arr[i] = 'Dojo'}
    }
    return arr;
}
//console.log(swapNegativesWithString([1,-1,2,-22,3,-.33,4,.04]))

//Print all odd integers from 1 to 255
function printOdds(){
    for(let i=1;i<=255;i++){
        console.log(i)
    }
}
//printOdds()

//Iterate through a given array, printing each value
function iteratePrintArray(arr){
    arr.forEach(item => {
        console.log(item)
    });
}
//iteratePrintArray([1,'one',[2,'two'],[3,['three','III']]])

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

//Implement a function sigma(num)​ that, given a
// number, returns the sum of all positive integers
// from 1 up to number (inclusive)
function sigma(num){
    let sum = 0;
    if(num<2){return 0;};
    for(let i=2;i<=num;i+=2){sum+=i};
    return sum;
}
console.log(sigma(5)) //expected output: 6
console.log(sigma(1)) //expected output:0
console.log(sigma(10)) //expected output:20