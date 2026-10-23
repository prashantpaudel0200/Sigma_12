const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
main()
    .then(()=>{
    console.log("Connection Successful");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
        from: "Roshan",
        to: "Pratik",
        msg: "Work Hard buddy",
        created_at: new Date()
    },
    {
        from: "David",
        to: "Warner",
        msg: "I am coming Nepal to play NPL",
        created_at: new Date()
    },
    {
        from: "Miller",
        to: "Kholi",
        msg:"NPL is approaching near",
        created_at: new Date()
    },
     {
        from: "Biswas",
        to: "Ankit",
        msg:"Here is my new bike. Do you want to ride",
        created_at: new Date()
    },
     {
        from: "Tony",
        to: "Peper",
        msg:"You need to handle all the bussiness",
        created_at: new Date()
    },
     {
        from: "Saroz",
        to: "Manzeel",
        msg:"Bruth is trying to cook something. Thats nice",
        created_at: new Date()
    },
     {
        from: "Erish",
        to: "Sarushi",
        msg:"Let the show down begain",
        created_at: new Date()
    },

];

Chat.insertMany(allChats)
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    });