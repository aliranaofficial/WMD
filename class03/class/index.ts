//exercise 1
var length:number=15;
var width:number=10;

var area:number= (length*width);

console.log(area);

//exercise 2
var length:number=30;
var width:number=30;
var height:number=30;

var volume:number=(length**3);
console.log(volume);

//exercise 3
var num:number=-6;
if(num>0){
    console.log("number is positive");
}


else if(num<0){
    console.log("number is negtive");
}


else {
    console.log("number is zero");
}

// exercise 4

var num:number=7;
if(num%2==0){
    console.log("even");
}

else {
    console.log("odd");
}


// switch case

var section:string= "A"
switch (section) {
    case "A":
        console.log("your section is A")
        break;

    default:
        console.log("your section is not A")
        break;
}

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