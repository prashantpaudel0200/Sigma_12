let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
let p = document.querySelector("p");
let button = document.querySelector("button");

function changeColor(){
     console.dir(this.innerText);
     this.style.backgroundColor = "blue";
   
}
h1.addEventListener("click", changeColor);
h3.addEventListener("click", changeColor);
p.addEventListener("click", changeColor);
button.addEventListener("click", changeColor);