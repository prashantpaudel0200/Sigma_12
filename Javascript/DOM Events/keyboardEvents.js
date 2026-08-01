// let btn = document.querySelector("button");
// // btn.addEventListener("click", function(event){
// //     console.log(event);
// //     console.log("Button CLicked");
// // })
// // btn.addEventListener("dblclick", function(event){
// //     console.log(event);
// //     console.log("Double CLicked");
// // })


let inp = document.querySelector("input");
inp.addEventListener("keydown", function(event){
    if(event.code == "ArrowDown"){
        console.dir("Character moves downwards");
    } else if(event.code =="ArrowUp"){
        console.dir("Character moves forward");
    } else if(event.code == "ArrowLeft"){
        console.dir("Character Moves Left");
    } else if(event.code == "ArrowRight"){
        console.dir("Character Moves Right");
    }
})
// inp.addEventListener("keyup", function(){
//     console.log("Released");
// })