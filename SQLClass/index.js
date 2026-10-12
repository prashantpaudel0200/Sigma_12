const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'admin',
  database: 'delta_app',
  password: 'your_password'
});

let q = "INSERT INTO user (ID, USERNAME, EMAIL, Password) VALUES(?, ?, ?, ?)";
let user = [123, "123_newuser", "abc@gmail.com", "abcKOpassword"];

try{
    connection.query(q, user, (err, result)=>{
    if(err) throw err;
    console.log(result);
    console.log(result.length);
    console.log(result[0]);
    console.log(result[1]);
});
} catch(err){
    console.log(err);
}
connection.end();



















const { faker } = require('@faker-js/faker');

let getRandomUser = ()=> {
  return {
    id: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password()
  };
}
console.log(getRandomUser());