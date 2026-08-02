let input = document.querySelector("input");
let p = document.querySelector("p");
input.addEventListener("input", function(){
    p.innerText = input.value;
});