const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

main()
    .then(()=>{
    console.log("Connection Successful");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let chat1 = new Chat({
    from:"Prashant",
    to: "Nishan",
    message: "Lets go on a ride.",
    created_at: new Date()
});

chat1.save()
    .then(()=>{
        console.log("Chat save");
    })
    .catch(()=>{
        console.log("Chat didnt save");
    })


app.get("/", (req, res)=>{
    res.send("Everything is working");
})

app.listen(8080, ()=>{
    console.log("Server is listening on port 8080");
})
