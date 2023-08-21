"use strict";
/*
var i:number=1;
while(i<10){
    console.log("i",i);
    //i=i+1
    i++
}

//i++
//++i
//i--
//--i

//we can add more in one line
for (let index = 0; index < 20; index++) {
    console.log("naveed",index);
    
}


//if fales then it will run once a while
do {
    console.log("naveed")
    i++
} while (i<=30);
//write a program that calculatessum of even number b/w 1-100

let sum:number =0;
for(let i=1; i<=100; i++){
    console.log("i",i);
    if (i%2 == 0) {
        sum=sum + i
        console.log("i",i);
    }

}
console.log("sum",sum);
*/
//wrte a ts program that calculates even number and also tje list
let sum = 0;
let list = [];
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        sum = sum + i;
        list.push(i);
        // console.log("i",i);
    }
}
console.log("sum", sum, list);
