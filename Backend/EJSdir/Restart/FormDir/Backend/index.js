const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})

app.get("/register", (req, res)=>{
    let {username, password} = req.query;
    console.log(username);
    console.log(password);
    res.send(`Standard GET response. Welcome ${user}!`);
})

app.post("/register", (req, res)=>{
    console.log(req.body);
    res.send("Standard POST request");
})