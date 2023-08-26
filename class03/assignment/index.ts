
// - Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.

function celsiusToFahrenheit(celsius: number): number
 {
    return (celsius * 9/5) + 32;
  }
  
  function fahrenheitToCelsius(fahrenheit: number): number
   {
    return (fahrenheit - 32) * 5/9;
  }
  
  var celsiusTemperature = 37;
  var fahrenheitTemperature = 102;
  
  console.log(`${celsiusTemperature} degrees Celsius is equal to ${celsiusToFahrenheit(celsiusTemperature)} degrees Fahrenheit.`);
  console.log(`${fahrenheitTemperature} degrees Fahrenheit is equal to ${fahrenheitToCelsius(fahrenheitTemperature)} degrees Celsius.`);

 

// - Write a program that calculates the percentage.

function calculatepercentage(value:number,total:number):number
 {
    return(value/total)*100;
}
 var value=750;
 var total=1100;

var percentage=calculatepercentage(value,total);

console.log(`${value} is ${percentage}% of ${total}.`);




//- Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.

function convertDaysToWeeksAndDays(days: number): string {
    var weeks = Math.floor(days / 7);
    var remainingDays = days % 7;
  
    return `${days} days = ${weeks} weeks and ${remainingDays} days.`;
  }
  
  var numberOfDays = 17;
  var converted = convertDaysToWeeksAndDays(numberOfDays);
  
  console.log(converted);






// - Write a program that calculates the discount for a product based on its price. If the price is above $100, 
//apply a 10% discount; otherwise, apply a 5% discount.

function calculateDiscount(price: number): number {
    if (price > 100) {
      return price * 0.1; // 10% discount
    } else {
      return price * 0.05; // 5% discount
    }
  }
  
  const productPrice = 120;
  const discount = calculateDiscount(productPrice);
  
  console.log(`The discount for a product with a price of $${productPrice} is $${discount}.`);





// - Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print "Child."
// If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."



function determineCategory(age: number): string
 {
    if (age >= 0 && age <= 12) {
      return "Child";
    } else if (age >= 13 && age <= 19) {
      return "Teenager";
    } else {
      return "Adult";
    }
  }
  
  var userAge = 19;
  var category = determineCategory(userAge);
  
  console.log(`The category for the age ${userAge} is ${category}.`);






// - Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and 
//so on according to the weather.

function suggestClothing(temprature:number): string
 {
    if (temprature<10) {
        return "It's cold, you should wear warm cloths."
    }
    if (temprature>=10 && temprature<20) {
        return "It's cool, you should wear slightly warm cloths."
    } 
    if(temprature>=20 && temprature<30) {
        return "It's mild, you should wear full slives cloth."
    }
    else{
        return "It's warm ,you should wear half slives and a shots."
    }
}
var temperature=15;
var clothingSuggestion=suggestClothing(temperature);

console.log(clothingSuggestion);

// - Write a program that checks if the given number is  divisible by 3 or 5 or both or not divisible by anyone show
// output accordingly.

function checkDivisibility(number: number): void 
{
    if (number % 3 === 0 && number % 5 === 0) {
      console.log(`${number} is divisible by both 3 and 5.`);
    } else if (number % 3 === 0) {
      console.log(`${number} is divisible by 3.`);
    } else if (number % 5 === 0) {
      console.log(`${number} is divisible by 5.`);
    } else {
      console.log(`${number} is not divisible by 3 or 5.`);
    }
  }
  
  var givenNumber = 15
  checkDivisibility(givenNumber);


// - Write a program that checks if the given year is leap year or not.

function isLeapYear(year: number): boolean {
    if (year % 4 !== 0) {
      return false;
    } else if (year % 100 !== 0) {
      return true;
    } else if (year % 400 !== 0) {
      return false;
    } else {
      return true;
    }
  }
  
  const year = 2024;
  
  if (isLeapYear(year)) {
    console.log(`${year} is a leap year.`);
  } else {
    console.log(`${year} is not a leap year.`);
  }


// - Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements
// to print the corresponding day's name.

var day:number=3

switch (day) {
    case 1:
        console.log("monday")
        break;
    case 2:
        console.log("tuesday")
        break;
    case 3:
        console.log("wednesday")
        break;
    case 4:
        console.log("thursday")
        break;
    case 5:
        console.log("friday")
        break;

    default:
        console.log("weekend")
        break;
}


// - Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax if 
//greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax
//Where the tax amount will be calculated by the amount of bill.

function calculateBill(unitsConsumed: number): number {
    let billAmount = 0;
  
    if (unitsConsumed > 500) {
      billAmount = unitsConsumed * 5 + (unitsConsumed * 5 * 0.25);
    } else if (unitsConsumed > 200) {
      billAmount = unitsConsumed * 5 + (unitsConsumed * 5 * 0.15);
    } else if (unitsConsumed > 100) {
      billAmount = unitsConsumed * 5 + (unitsConsumed * 5 * 0.10);
    } else {
      billAmount = unitsConsumed * 5;
    }
  
    return billAmount;
  }
  
  const units = 300;
  const bill = calculateBill(units);
  
  console.log(`The bill amount for ${units} units consumed is $${bill}.`);