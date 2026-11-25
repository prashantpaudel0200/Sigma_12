// Arthimetic Operators
let a=10;
let b=20;
console.log("a=",a,"and b=",b);
console.log("a + b=",a+b);
console.log("a - b=",a-b);
console.log("a * b=",a*b);
console.log("a / b=",a/b);
// Direct Value Print
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);

a=2;
b=3;
console.log("Now a=",a,"and b=",b);


console.log("a ** b=",a**b); // 2^3 = 2*2*2 = 8
console.log("a % b=",a%b); // 2%3 = 2 (remainder when 2 is divided by 3)

// Comparison Operators
console.log("2 == 3: ", 2==3);

// Conditional Statements
let age = 25;
if (age >=18){
    console.log("You can vote.");
}
else{
    console.log("You cannot vote.");
}
let mode= prompt("Enter mode [Dark/Light]: ");
let color;
if (mode == "Dark"){
    color = "Dark";
}
if (mode == "Light"){
    color = "Light";
}
console.log(color);

// Ternary Operators
age=prompt("Enter your age:");
let result = age>18? 'adult': 'Children';
console.log(result);