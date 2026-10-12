const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'admin',
  database: 'delta_app',
  password: 'your_password'
});


let q = "INSERT INTO user (ID, USERNAME, EMAIL, Password) VALUES ?";

let user = [
    [12333, "12333_newuser", "abcccccc@gmail.com", "abccccKOpassword"],
    [133, "133_newuser", "abbbbc@gmail.com", "abbbbbcKOpassword"],
    [122, "122_newuser", "acccc@gmail.com", "acccccKOpassword"]
];

connection.query(q, [user], (err, result) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(result);
    console.log(result.affectedRows);
});
connection.end();

// try{
//     connection.query("SHOW TABLES", (err, result)=>{
//     if(err) throw err;
//     console.log(result);
//     console.log(result.length);
//     console.log(result[0]);
//     console.log(result[1]);
// });
// } catch(err){
//     console.log(err);
// }
// connection.end();


















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