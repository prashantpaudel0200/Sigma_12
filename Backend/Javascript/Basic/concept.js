console.log("Hello World");
let a=10;
let b=20;
let output="The total price is "+(a+b)+"ruppes."
let output2="The difference is "+(b-a)+"ruppes"
console.log(output);
console.log(output2);
let output3=`The total pric is ${a+b+10} after including tax.`;
console.log(output3);

let c=prompt("Enter your age:");
if(c>18){
    console.log("You are adult.");
}
else{
    console.log("You are minor.");
}