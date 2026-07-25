function add(a, b){
    console.log( a+b);
}
function calculator(x, y, operation) {
    operation(x,y);
}
calculator(5, 4, add);