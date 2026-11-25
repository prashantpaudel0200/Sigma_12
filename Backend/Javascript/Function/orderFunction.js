let greet = "Namaste";
let wish = function(){
    console.log(greet);
}
function multiple_greet(func, count){
    for(let i=1; i<=count; i++){
        wish();
    }
}