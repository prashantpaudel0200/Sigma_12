let button = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");

button.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = input.value;

    let delt = document.createElement("button");
    delt.innerText = "Delete this";
    delt.classList.add("delete");
    ul.appendChild(item);
    item.appendChild(delt);
    input.value = "";
});

ul.addEventListener("click", function (event) {
    if (event.target.nodeName == "BUTTON") {
        console.log("Delete");
        let listItem = event.target.parentElement;
        console.log(listItem);
        listItem.remove();



    }
})

