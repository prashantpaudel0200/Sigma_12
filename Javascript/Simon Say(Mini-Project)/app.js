
let gameSeq = [];
let userSeq = [];
let btns = ["red", "yellow", "green", "purple"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");
document.addEventListener("keypress", function(){
   if(started == false){
     console.log("GAME STARTED");
     started = true;

     levelUp();
   }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 150);
}

function levelUp(){
    level++;
    userSeq = [];
    h2.innerText =`Level ${level}`;
    //choose random button
    let randIdx = Math.floor(Math.random()* 4);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randbtn);
}
function checkAns(idx){
    // console.log("Current Level: ",level);
    if(gameSeq[idx] === userSeq[idx]){
        if(gameSeq.length == userSeq.length){
            setTimeout(levelUp, 1000);
        }

    } else{
        h2.innerText = 'Game Over! Press any key to start.';
    }
}

function btnPress(){
    console.log(this);
    let btn = this;
    btnFlash(btn);
    let userColor = btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click", btnPress);
}