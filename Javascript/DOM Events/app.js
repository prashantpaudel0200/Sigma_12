let btns = document.querySelectorAll("button");
for(btn of btns){
    btn.addEventListener("click", sayHello);
    btn.addEventListener("mouseenter", sayName);
}

function sayHello() {
    alert("HELLO!");
}

function sayName(){
    alert("Hovered hmm?")
}