"use strict";
// - Develop a program that calculates and prints the sum of the first n even numbers using a for loop.
var sum = 0;
for (let index = 0; index <= 20; index++) {
    if (index % 2 == 0) {
        sum = sum + index;
    }
}
console.log("Sum of first ten even number is", sum);
// - Implement a program that uses a for loop to iterate through an array of numbers and print only the even 
//numbers.
let array = [];
for (var index = 2; index <= 50; index++) {
    if (index % 2 == 0) {
        array.push(index);
    }
}
console.log("even numbers are", array);
// - Implement a program that uses a loop to iterate through an array of numbers and remove all the even 
//   numbers from them and just leave the odd ones
let list = [];
for (var i = 0; i <= 50; i++) {
    if (i % 2 !== 0) {
        list.push(i);
    }
}
console.log("Odd numbers are", list);
// - Write a program that defines a function to calculate the area of a circle. The function should take the
//   radius as input and return the calculated area.
function AreaOfCircle(radius) {
    var area = Math.PI * radius ^ 2;
    return area;
}
var radius = 7;
var area = AreaOfCircle(radius);
console.log("Area of circle is", area);
// - Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.
// - Write a program that uses a function to find the largest element in an array of numbers.