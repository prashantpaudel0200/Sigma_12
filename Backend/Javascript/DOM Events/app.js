let btns = document.querySelectorAll("button");
for(btn of btns){
    // btn.addEventListener("click", sayHello);
    // btn.addEventListener("mouseenter", sayName);
    btn.addEventListener("dblclick", sayHello);
}

function sayHello() {
    alert("HELLO!");
}

function sayName(){
    alert("Hovered hmm?")
}