let nav_list= ["Home","Services", "Location", "Contact"];
let nav_items = document.getElementById("nav-list");
for (let item of nav_list) {
    nav_items.innerHTML+=`<li> ${item}</li>`;
}