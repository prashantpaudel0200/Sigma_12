const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true })); //PARSE URL ENCODED DATA
app.use(express.json());//PARSE JSON DATA

let posts = [
    {
        id: "1a",
        username: "prashantpdl",
        content: "I love coding"
    },
    {
        id: "2b", 
        username: "nishanshrestha",
        content: "I need my migration certificate"
    },
    {
        id: "3c",
        username: "bidurlamichhane",
        content: "Need more focus in life"
    }
]





app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
})

app.get("/post/new", (req, res)=>{
    res.render("newPost.ejs");
})

app.post("/posts", (req, res)=>{
    let { username, content} = req.body;
    posts.push({username, content});
    res.redirect("/posts");
})

app.get("/posts/:id", (req, res)=>{
    let {id} = req.params;
    let post = posts.find((p)=> id === p.id);
    res.render("show.ejs", {post});
})

app.listen(port, () => {
    console.log(`Listening on PORT: ${port}`);
});