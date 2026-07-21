let max = prompt("Enter max limit");
let num = Math.floor(Math.random() *max + 1);
let guess = prompt("Enter your guess:")
while(guess != num)
    {
        if(guess == 'quit'){
            break;
        }
        if(guess != num){
            guess = prompt("Wromg Guess!, Enter again");
        }
    }
    if(guess == num){
            console.log(`Congratulations!!! You guessed it right. It was ${num}`);
        }
    if(guess == 'quit'){
        console.log("Nice Try");
    }