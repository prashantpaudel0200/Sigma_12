const express = require("express");
const app = express();

// app.use((req, res, next)=>{
//     console.log("I am 1st middleware");
//     next();
// });
// app.use((req, res, next)=>{
//     console.log("I am 2nd middleware");
//     return next();
// });

//logger
// app.use( (req, res, next)=>{
//     req.time = new Date(Date.now()).toString();
//     console.log(req.hostname)
//     console.log(req.method);
//     console.log(req.path);
//     console.log(req.time);
//     next();
// } );


let checkToken = (req, res, next)=>{
    let { token } = req.query;
    if(token == "giveaccess"){
       return next();
    } else{
        res.send("ACCESS DENIED");
    }
};

app.get("/api", checkToken, (req, res) => { 
    res.send("data");
})


app.get("/route", (req, res)=>{
    res.send("Route is working");
});

app.listen(8080, ()=>{
    console.log("Listining on port 8080");
});