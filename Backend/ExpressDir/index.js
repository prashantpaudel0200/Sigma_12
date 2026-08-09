const express = require("express");
const app = express();
const  port = 8080;


app.listen(port, ()=>{
    console.log(`App is listining from port ${port}`);
});

app.use((req, res)=>{
    // console.log(req);
    console.log("request received");
    // res.send({
    //     name:"Apple",
    //     color:"Red"
    // });
    let code = "<h1>Fruits</h1><ul><li>Apple</li><li>Orange</li></ul>"
    res.send(code);
});