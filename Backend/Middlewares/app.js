const express = require("express");
const app = express();

app.use((req, res, next)=>{
    console.log("I am 1st middleware");
    next();
});
app.use((req, res, next)=>{
    console.log("I am 2nd middleware");
    return next();
});

app.get("/", (req, res)=>{
    res.send("Route is working");
})

app.listen(8080, ()=>{
    console.log("Listining on port 8080");
})