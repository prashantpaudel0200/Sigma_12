const { urlencoded } = require("body-parser");
const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
}
)