const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");


app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));

main()
    .then(()=>{
    console.log("Connection Successful");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

//INDEX ROUTE
app.get("/chats", async (req, res)=>{
   let chats = await Chat.find();
   res.render("index.ejs", { chats });
});
//NEW CHAT ROUTE
app.get("/chats/new", (req, res)=>{
    res.render("new.ejs");
});

app.get("/", (req, res)=>{
    res.send("Everything is working");
});

app.post("/chats", (req, res)=>{
    let { from, to, msg } = req.body;
    let newChat = new Chat({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date()
    });
    newChat.save().catch(err=>{ console.log(err)});
    res.redirect("/chats");
});
app.get("/chats/:id/edit", async (req, res)=>{
    let id = req.params.id;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", {chat});
})

app.post("/chats/:id", async(req, res)=>{
    let id = req.params.id;
    let chat = await Chat.findById(id);
    console
    res.redirect("/chats");
});
app.listen(8080, ()=>{
    console.log("Server is listening on port 8080");
});
