const express = require("express");
const app = express();

app.use(()=>{
    console.log("I am middleware");
});

app.get("/", (req, res)=>{
    res.send("Route is working");
})

app.listen(8080, ()=>{
    console.log("Listining on port 8080");
})