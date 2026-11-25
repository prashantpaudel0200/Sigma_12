let max = prompt("Enter max limit");
let num = Math.floor(Math.random() * max + 1);
let guess = prompt("Enter your guess:")
while (true) {
    if (guess === 'quit') {
        console.log("User Quit");
        break;
    }

    if (guess ==num) {
        console.log(`Congratulations!!! You guessed it right. It was ${num}`);
        break;
    } else if (guess < num) {
        guess = prompt("Wrong Guess!(You entered small), Enter again");
    } else {
        guess = prompt("Wrong Guess!(You entered bigger), Enter again");
    }
}