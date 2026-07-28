
const data = {
    email:"user1@gmail.com",
    password:"abcd"
};
const datacopy = {...data, id:123, country: "Nepal"};

let arr = [1,3,5,7,9];
let obj1;
obj1 = {...arr};// ->Index will be key and arr item will be value to make key-value pair.
obj2 ={..."Hello"};