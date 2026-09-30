const express = require("express");
const app = express();
const port = 8080;

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})

app.get("/register", (req, res)=>{
    let {user, password} = req.query;
    console.log(user);
    console.log(password);
    res.send(`Standard GET response. Welcome ${user}!`);
})

app.post("/register", (req, res)=>{
    res.send("Standard POST request");
})