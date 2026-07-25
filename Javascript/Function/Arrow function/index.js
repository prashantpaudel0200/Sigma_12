const sum = (a, b=0) => {
    console.log(a+b);
}
const cube = (n) => {
    console.log(n*n*n);5
}
const pow = (a, b) => {
    console.log(a**b);
}
const mul = (a, b) => (a*b);
const subtraction = (a, b) => a-b ;

//Creating method
const  test = {
    add : function(a, b){
        console.log(a+b);
    },
    sub: function(a, b){
        console.log(a-b);
    }
}