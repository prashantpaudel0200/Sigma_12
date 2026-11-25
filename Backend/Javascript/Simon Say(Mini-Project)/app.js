let gameSeq = [];
let userSeq = [];
let btns = ["red", "yellow", "green", "purple"];
let started = false;
let level = 0;
let highestScore = "";
let h2 = document.querySelector("h2");
document.addEventListener("keypress", function(){
   if(started == false){
     started = true;
     levelUp();
   }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 150);
};

function levelUp(){
    level++;
    userSeq = [];
    h2.innerText =`Level ${level}`;
    //choose random button
    let randIdx = Math.floor(Math.random()* 4);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    btnFlash(randbtn);
    console.log(gameSeq);
};

function checkAns(idx){
    if(gameSeq[idx] === userSeq[idx]){
        if(gameSeq.length == userSeq.length){
            setTimeout(levelUp, 1000);
        }
    } else{
        if(level > highestScore){
            highestScore = level;
}
        let score = userSeq.length ;
        h2.innerHTML = `Game Over! Your score is <b>${level}</b><br> Highest Score :${highestScore}<br>Press any key to start. `;
        document.querySelector("body").style.background = "red";
        setTimeout(function(){
            document.querySelector("body").style.background = "white";
        }, 150);
        reset();
    }
};

function btnPress() {
    let btn = this;
    btnFlash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
};

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
