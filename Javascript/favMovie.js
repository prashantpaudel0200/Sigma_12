let favMovie=prompt("Enter my favorite movie:");
let guess=prompt("Enter your guess movie:");
while((favMovie != guess)){
    if(guess == "quit"){
        console.log("You Quit!");
        break;
    }
    guess=prompt("Try again! Enter another:");
}
if(favMovie == guess){
    console.log("Congratulations you are correct.");
}
