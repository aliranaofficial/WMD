"use strict";
// set timeout
console.log("Start");
setTimeout(() => {
    console.log("in sttimeout");
}, 5000);
console.log("end");
// set interval
console.log("Start");
function printInFunction() {
    console.log("in setinterval");
    count++;
    if (count == 3) {
        clearInterval(get);
    }
}
let count = 0;
const get = setInterval(printInFunction, 2000);
console.log("end");
