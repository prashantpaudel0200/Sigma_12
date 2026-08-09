const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res)=>{
    res.render("home.ejs");
})

app.get("/hello", (req, res)=>{
    res.send("Hello");
})

app.listen(port, ()=>{
    console.log("App is listening");
});