
// - Develop a program that calculates and prints the sum of the first n even numbers using a for loop.

var sum:number=0;
for (let index=0;index<=20;index++){
    if(index % 2 == 0){
        sum=sum+index
    }

}
console.log("Sum of first ten even number is",sum);



// - Implement a program that uses a for loop to iterate through an array of numbers and print only the even 
//numbers.

let array:number[]=[];
for (var index=2;index<=50;index++){
    if (index%2==0) {
       
       array.push(index); 
        
    }

}
console.log("even numbers are",array);


// - Implement a program that uses a loop to iterate through an array of numbers and remove all the even 
//   numbers from them and just leave the odd ones

let list:number[]=[]
for(var i=0;i<=50;i++){
    if(i%2!==0){
        list.push(i);
    }
}
console.log("Odd numbers are",list);


// - Write a program that defines a function to calculate the area of a circle. The function should take the
//   radius as input and return the calculated area.

function AreaOfCircle(radius:number)
 {
   var area:number= Math.PI*radius^2;
   return area;
    
}
var radius=7;
var area:number=AreaOfCircle(radius);

console.log("Area of circle is", area);



// - Develop a program that reads a list of grades and uses the splice method to remove failing grades 
//  (below 50) from the array.

function removeFailingGrades(grades: number[]): number[] {
    for (let i = grades.length - 1; i >= 0; i--) {
      if (grades[i] < 50) {
        grades.splice(i, 1);
      }
    }
    return grades;
  }
  
  const grades: number[] = [80, 65, 45, 90, 55, 70];
  const filteredGrades: number[] = removeFailingGrades(grades);
  console.log("Filtered grades:", filteredGrades);


// - Write a program that uses a function to find the largest element in an array of numbers.

function findLargestElement(numbers: number[]): number {
  let largest = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }
  return largest;
}

const numbers = [5, 10, 2, 8, 3];
const largestElement = findLargestElement(numbers);
console.log("The largest element is:", largestElement);


