const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'admin',
  database: 'delta_app',
  password: 'your_password'
});

try{
    connection.query("SHOW TABLES", (err, result)=>{
    if(err) throw err;
    console.log(result);
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