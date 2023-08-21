"use strict";
//exercise 1
var length = 15;
var width = 10;
var area = (length * width);
console.log(area);
//exercise 2
var length = 30;
var width = 30;
var height = 30;
var volume = (length ** 3);
console.log(volume);
//exercise 3
var num = -6;
if (num > 0) {
    console.log("number is positive");
}
else if (num < 0) {
    console.log("number is negtive");
}
else {
    console.log("number is zero");
}
// exercise 4
var num = 7;
if (num % 2 == 0) {
    console.log("even");
}
else {
    console.log("odd");
}
// switch case
var section = "A";
switch (section) {
    case "A":
        console.log("your section is A");
        break;
    default:
        console.log("your section is not A");
        break;
}
var day = 3;
switch (day) {
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
    default:
        console.log("weekend");
        break;
}
