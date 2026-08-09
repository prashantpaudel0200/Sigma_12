const express = require("express");
const app = express();
const  port = 8080;


app.listen(port, ()=>{
    console.log(`App is listining from port ${port}`);
});

app.use((req, res)=>{
    console.log("request received");
});