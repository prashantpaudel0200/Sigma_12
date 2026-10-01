const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let posts = [
    {
        usename: "prashantpdl",
        content: "I love coding"
    },
    {
        username: "nishanshrestha",
        content: "I need my migration certificate"
    },
    {
        usename: "bidurlamichhane",
        content: "Need more focus in life"
    }
]





app.get("/", (req, res) => {
    res.send("Server Working well!");
})

app.listen(port, () => {
    console.log(`Listening on PORT: ${port}`);
});