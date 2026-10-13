const mysql = require("mysql2");
const { faker } = require('@faker-js/faker');
const express = require("express");
const app = express();
const path = require("path");
const port = 8080;
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'admin',
  database: 'delta_app',
  password: 'your_password'
});


let getRandomUser = ()=> {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password()
  ];
};


app.get("/", (req, res)=>{
  let q = `SELECT count(*) FROM user`;

  try{
    connection.query(q, (err, result) => {
    if(err) throw err;
    console.log(result[0]["count(*)"]);
    let count = result[0]["count(*)"];
    res.render("home.ejs", {count});
}); 
} catch (err) {
   console.log(err);
   res.send("Some error in DATABASE");
};
})

//show route
app.get("/user", (req, res)=>{
  let q = `SELECT * FROM user`;
  try{
    connection.query(q, (err, users) => {
    if(err) throw err;
    // console.log(result);
    // res.send(result);
    res.render("showuser.ejs", {users});
}); 
} catch (err) {
   console.log(err);
   res.send("Some error in DATABASE");
};
})

//EDIT ROUTE
app.get("/user/:id/edit", (req, res)=>{
  let { id } = req.params;
  let q = ` SELECT * FROM user WHERE ID = '${id}'`;

    try{
    connection.query(q, (err, result) => {
    if(err) throw err;
    let user = result[0];
    console.log(result);
    res.render("edit.ejs", { user });


}); 
} catch (err) {
   console.log(err);
   res.send("Some error in DATABASE");
};
})

//UPDATE ROUTE
app.patch("/user/:id", (req, res)=>{
  res.send("Success");
})


app.listen(port,()=>{
  console.log(`App is listening on port ${port}`);
})



































































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