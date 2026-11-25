square = (a) =>{
    return a*a;
}
function input(){
    let num = prompt("Enter a number:\t");
    let value = square(num);
    console.log(value);
}

let id=setInterval(() =>{
    console.log("Hello World.");
},2000);

setTimeout(() => {
    clearTimeout(id);
    console.log("Interval Cleared");
}, 10000);