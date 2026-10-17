const mongoose = require('mongoose');
//To run this code, make sure to start mongodb in terminal.
main()
    .then((result)=>{
        console.log("Connection Established");
    })
    .catch((err)=>{
        console.log("Connection failed");
    })

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const User = mongoose.model("User", userSchema);
const Employee = mongoose.model("Employee", userSchema);

const user1 = new User({
    name: "Adam",
    email: "adam@yahoo.com"
});
user1.save();

const user2 = new User({
    name: "Eve",
    email: "eve123@gmail.com",
    age: 23
});

user2.save()
    .then((result)=>{
        console.log("Insertion Successfull.");
    })
    .catch((err)=>{
        console.log("Fail to insert.");
    })