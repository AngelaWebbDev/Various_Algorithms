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