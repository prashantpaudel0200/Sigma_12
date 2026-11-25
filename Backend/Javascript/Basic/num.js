let number=prompt("Enter a number:");
if(number % 2 == 0){
    console.log("The number is even.");
}
else {
    console.log("The number is odd.");
}

// 2nd operation
 number = prompt("Enter another number:");
 if(number %5 == 0){
    console.log("The number is multiple of 5.");
    let t = number /5;
    console.log (`5 * ${t} = ${number}`);
 }
 else {
    console.log("The number is not divisible by 5.");
 }

 //3rd Operation
 let grade;
 let mark = prompt("Enter a number");
 if (mark >= 80 && mark <= 100){
    grade='A';
 } else if (mark >= 70 && mark <= 79){
    grade='B+';
 } else if (mark >= 60 && mark <= 69){
   grade='B';
 } else if (mark >= 50 && mark <= 59){
    grade='C+';
 }else if (mark >= 40 && mark <= 49){
    grade='';
 }
 console.log(`You score ${grade} Grade.`);