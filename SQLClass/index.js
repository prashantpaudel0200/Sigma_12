const mysql = require("mysql2");
const { faker } = require('@faker-js/faker');


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'admin',
  database: 'delta_app',
  password: 'your_password'
});


// let q = "INSERT INTO user (ID, USERNAME, EMAIL, Password) VALUES ?";

// let user = [
//     [12333, "12333_newuser", "abcccccc@gmail.com", "abccccKOpassword"],
//     [133, "133_newuser", "abbbbc@gmail.com", "abbbbbcKOpassword"],
//     [122, "122_newuser", "acccc@gmail.com", "acccccKOpassword"]
// ];

// connection.query(q, [user], (err, result) => {
//     if (err) {
//         console.log(err);
//         return;
//     }

//     console.log(result);
//     console.log(result.affectedRows);
// });
// connection.end();

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



















let q = "INSERT INTO user (ID,USERNAME, EMAIL, Password) VALUES ?";

let getRandomUser = ()=> {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password()
  ];
};

let data = [];
for(let i=1; i<= 100; i++){
   data.push(getRandomUser());
}
    connection.query(q, [data], (err, result) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(result);
    console.log(result.affectedRows);
});
connection.end();