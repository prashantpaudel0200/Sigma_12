let greet = "Hello";
function outergreet(){
    greet = "Namaste";
    console.log(greet);
    function innergreet(){
        console.log(greet);
    }
    innergreet();
}
console.log(greet);
outergreet();
