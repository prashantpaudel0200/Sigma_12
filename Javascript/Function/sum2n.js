let number = prompt("Enter a number");
function sum2n(num){
    let sum = 0;
    for(i = 0; i<= num; i++){
        sum +=i;
    }
    return sum;
}
let sum = sum2n(number);
console.log(sum);