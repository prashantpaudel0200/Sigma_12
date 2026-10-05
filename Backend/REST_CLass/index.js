const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const  {v4 : uuidv4} = require("uuid");
const methodOverride = require("method-override");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true })); //PARSE URL ENCODED DATA
app.use(express.json());//PARSE JSON DATA
app.use(methodOverride("_method"));

let posts = [
    {
        id: uuidv4(),
        username: "prashantpdl",
        content: "I love coding"
    },
    {
        id: uuidv4(), 
        username: "nishanshrestha",
        content: "I need my migration certificate"
    },
    {
        id: uuidv4(),
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
    let id = uuidv4();
    posts.unshift({id, username, content});
    res.redirect("/posts");
})

app.get("/posts/:id", (req, res)=>{
    let {id} = req.params;
    let post = posts.find((p)=> id === p.id);
    res.render("show.ejs", {post});
})

app.patch("/posts/:id", (req, res)=>{
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((p)=> id === p.id);
    post.content = newContent;
    res.redirect("/posts");
})

app.get("/posts/:id/edit", (req, res)=>{
    let {id} = req.params;
    let post = posts.find((p)=> id === p.id);
    res.render("edit.ejs", {post});
})

app.listen(port, () => {
    console.log(`Listening on PORT: ${port}`);
});