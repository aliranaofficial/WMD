//array method
//Map     return the same length array
//filter  return same length or less
//forEach return nothing



let number:number[]=[ 2,3,4,5,6,7,8,9 ]


// let updatearray = number.filter
    
let oddNumber = number.filter((item) => {
    if (item % 2 !== 0){
        return true;

    }
})
 console.log(oddNumber);
 console.log("Original Array", number);  


 let newArray = number.forEach((data) => {
    console.log(data);
 })
console.log(newArray);

let names:string[]=["hurrairah","naveed","ali"];
names.forEach




// Method Loops
// map Method
// Functionality: The map method creates a new array by applying a transformation function to each element of the original array.

// Return Value: It returns a new array containing the transformed elements.

// Changes Original Array: No, the original array remains unchanged when using the map method.

// Parameters: The map method takes a single argument, which is a callback function that is applied to each element of the array.

// Example:

// const numbers = [1, 2, 3];
// const doubled = numbers.map(num => num * 2);
// // Result: numbers = [1, 2, 3], doubled = [2, 4, 6]
// filter Method
// Functionality: The filter method creates a new array containing elements that satisfy a given condition.

// Parameters: The filter method takes a single argument, which is a callback function that tests each element of the array.

// Return Value: It returns a new array containing the filtered elements.

// Changes Original Array: No, the original array remains unchanged when using the filter method.

// Example:

// const numbers = [1, 2, 3, 4, 5];
// const evenNumbers = numbers.filter(num => num % 2 === 0);
// // Result: numbers = [1, 2, 3, 4, 5], evenNumbers = [2, 4]
// forEach Method
// Functionality: The forEach method iterates over each element of an array and executes a provided function.

// Parameters: The forEach method takes a single argument, which is a callback function that is executed for each element.

// Return Value: It does not return a value; it is used for its side effects.

// Changes Original Array: No, the original array remains unchanged when using the forEach method.

// Example:

// const fruits = ["apple", "banana", "cherry"];
// fruits.forEach(fruit => console.log(`I love ${fruit}s!`));
// // Result: (Logs "I love apples!", "I love bananas!", "I love cherries!")