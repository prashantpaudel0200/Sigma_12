let submit = document.querySelector("form button");
submit.addEventListener("click", function(event){
    event.preventDefault();
    alert("You are submmiting this form");
})