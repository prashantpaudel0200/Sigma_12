const { urlencoded } = require("body-parser");
const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

let posts = [
    {
        id: uuidv4(),
        username: "prashantpdl020",
        content: "This is the way to become more better."
    },
    {
        id: uuidv4(),
        username: "laxmipdl0222",
        content: "Pasal ma basdena kanxo."
    },
    {
        id: uuidv4(),
        username: "kamalkanta",
        content: "Machine bata phone aayo! Xito Xito"
    }
];

app.get("/insta", (req, res) => {
    res.render("index.ejs", { posts });
})

app.get("/insta/:id/details", (req, res) => {
    let id = req.params.id;
    let post = posts.find((p) => p.id === id);
    res.render("details.ejs", { post });
})

app.get("/insta/edit/:id", (req, res)=>{
    let id = req.params.id;
    let post = posts.find((p) => p.id === id);
    console.log(post);
    res.render("edit.ejs", {post});
})
app.patch("/insta/:id", (req, res)=>{
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((p)=> id === p.id);
    post.content = newContent;
    res.redirect("/insta");
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
}
)