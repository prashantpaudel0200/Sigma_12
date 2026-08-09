const express = require("express");
const app = express();
const  port = 8080;


app.listen(port, ()=>{
    console.log(`App is listining from port ${port}`);
});

app.get('/home',(req, res)=>{
    // console.log(req);
    console.log("request received");
    res.send({
        name:"Apple",
        color:"Red"
    });
});
app.get('/fruits',(req, res)=>{
    console.log("request received");
    let code = "<h1>Fruits</h1><ul><li>Apple</li><li>Orange</li></ul>"
    res.send(code);
});

app.get("*splat", (req, res)=>{
    res.send("Error-404 Page not Found");
});

app.post("/",(req, res)=>{
    res.send("You send a post request.");
})