let submit = document.querySelector("form button");
let form = document.querySelector("form");

submit.addEventListener("click", function(event){
    event.preventDefault();
    console.dir(form);

    // alert("You are submmiting this form");

    // let username = document.querySelector("#user");
    // let password = document.querySelector("#pass");
    // console.dir(username.value);
    // console.dir(password.value);
    // alert(`Hi ${username.value} you are registering here with password: ${password.value}.`);


    // let inp = document.querySelector("input");
    // console.dir(inp);
    // console.log(inp.value);
})