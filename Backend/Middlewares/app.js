const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

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
    }
    throw new ExpressError(401, "Access Denied" );
};



app.get("/err", (req, res)=>{
    abcd = abcd;
})

app.get("/admin", (req, res)=>{
    throw new ExpressError(403, "ACCESS to Admin is forbidden ");
})
app.get("/api", checkToken, (req, res) => { 
    res.send("data");
});
app.use((err, req, res, next)=>{
    let { status=500, message } = err;
    res.status(status).send(message);
});


app.get("/route", (req, res)=>{
    res.send("Route is working");
});








app.listen(8080, ()=>{
    console.log("Listining on port 8080");
});