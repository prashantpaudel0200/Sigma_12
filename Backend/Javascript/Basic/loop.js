// let i;
// for(i=1;i<=15;i++){
//     console.log(i);
// }
// console.log("Backward Count");
// for(i=15; i>=1; i--){
//     console.log(i);
// }
// console.log("Even number between 2 to 10");
// for(i=2; i<=10; i+=2){
//     console.log(i);
// }
// console.log("Even number between 10 to 2");
// for(i=10; i>=2; i=i-2){
//     console.log(i);
// }
// console.log("Multiplication Table of 5");
// for(i=5;i<=50; i+=5){
//     console.log(i);
// }
console.log("Table of any number:");
let n = prompt("Enter a number:");
n = parseInt(n);
// console.log(n);
for(let i=n; i<=n*10; i+=n){
    console.log(i);
}