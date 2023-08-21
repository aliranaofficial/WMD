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


//wrte a ts program that calculates even number and also tje list




let sum:number =0;
let list:number[]=[]
for(let i=1; i<=100; i++){
    
    if (i%2 == 0) {
        sum=sum + i
        list.push(i)
       // console.log("i",i);
    }

}
console.log("sum",sum, list);


var num:number=69;
console.log(num);
*/
for (let index = 0; index < 12; index++) {
    console.log("alirana", index);
}
var index = 30;
do {
    console.log("ali", index);
} while (index <= 13);
let sum = 2;
let list = [];
for (let index = 2; index <= 300; index++) {
    // console.log("index",index);
    if (index % 2 !== 0) {
        sum = sum + index;
        list.push(index);
        // console.log("num",index);
    }
}
console.log("sum", sum, list);
