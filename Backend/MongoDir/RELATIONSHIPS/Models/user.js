const mongoose = require("mongoose");
const { Schema } = require("mongoose");

main()
    .then(() => {
        console.log("Connection Successfull");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const userSchema = new Schema({
    username: String,
    addresses: [
        {
            _id: false,
            location: String,
            city: String,
        }
    ],
});

const User = mongoose.model("User", userSchema);

const addUser = async () => {
    const user1 = new User({
        username: "Prashant",
        addresses: [
            {
                location: "Nepal",
                city: "Pokhara",
            },
        ],
    });
    await user1.addresses.push(
    {
        location:"New Baneshwor",
        city:"Kathmandu",
    });
    await user1.save().then(() => console.log("Data Saved"));
}
addUser();

