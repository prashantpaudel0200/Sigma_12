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

