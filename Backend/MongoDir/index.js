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

// const user1 = new User({
//     name: "Adam",
//     email: "adam@yahoo.com"
// });
// user1.save();

// const user2 = new User({
//     name: "Eve",
//     email: "eve123@gmail.com",
//     age: 23
// });

// user2.save()
//     .then((result)=>{
//         console.log("Insertion Successfull.");
//     })
//     .catch((err)=>{
//         console.log("Fail to insert.");
//     })

User.insertMany([
    {name:"Avash", email:"avash454@gmail.com", age: 12},
    {name:"Biplov", email:"d_biplove@gmail.com", age:22},
    {name:"Deepesh", email:"deepesh12@gmail.com", age:21}
]).then((res)=>{
    console.log("Multiple data is inserted");
}).catch((err)=>{
    console.log("Fail to insert multiple data");
})

User.find({})
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    });