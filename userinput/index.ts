import inquirer from "inquirer";

 async  function result () {
    let grade = await inquirer.prompt({
    type : "number",
    name : "grade",
    message : "enter grade number"
})
 if(grade.grade>=80){
    console.log("A+");
 }
 if (grade.grade<=80 && grade.grade>=70){
     console.log("A");
 }
 if (grade.grade<=70 && grade.grade>=60){
     console.log("B");
 }
 if (grade.grade<=60 && grade.grade>=50){
     console.log("C");
 }
 if(grade.grade<=50 && grade.grade>=40){
     console.log("D");
 }
 if (grade.grade<40 ){
     console.log("Fail");
 }
 
    
}

result()

