let number = 287152;
let rem, temp, sum = 0;
while( number >=1 ) {
    rem = number % 10;
    sum += rem;
    number = Math.floor(number / 10);
} 
console.log(sum);