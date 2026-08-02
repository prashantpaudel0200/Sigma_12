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
    }, 250);
}

function levelUp(){
    level++;
    h2.innerText =`Level ${level}`;
    //choose random button
    let randIdx = Math.floor(Math.random()* 4);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`)
    btnFlash(randbtn);
}
