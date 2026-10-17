const mongoose = require("mongoose");

main()
    .then((res)=>{
        console.log("Connection established");
    })
    .catch((err)=>{
        console.log("Error");
    });

async function main() {
     await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}
const bookSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    author:{
        type: String
    },
    price:{
        type: Number
    }
});
const Book = mongoose.model("Book", bookSchema);

