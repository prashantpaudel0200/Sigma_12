const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res)=>{
    res.render("home.ejs");
});

app.get("/ig/:username", (req, res)=>{
    let {username}= req.params;
    const instaData = require("./data.json");
    console.log(instaData);
    data = instaData[username];
    console.log(data);
    res.render("instagram.ejs", data);
})

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
});

// app.get("/rollDice", (req, res)=>{
//     let diceNum = Math.floor(Math.random()*6+1);
//     res.render("rolldice", {diceNum});
// });