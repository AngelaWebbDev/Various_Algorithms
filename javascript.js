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
printIntsAndSum0To255()