const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res)=>{
    res.render("home.ejs");
})
app.get("/rolldice", (req, res)=>{
    let diceValue = Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs", {num: diceValue});
});

app.get("/ig/:username", (req, res)=>{
    let { username } = req.params;
    console.log(username);
    res.render("instagram.ejs", {name : username})
});


app.listen(port, ()=>{
    console.log("App is listening");
})