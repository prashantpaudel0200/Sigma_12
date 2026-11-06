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

const orderSchema = new Schema({
    item: String,
    price: Number,
});

const customerSchema = new Schema({
    name: String,
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: "Order",
        }
    ],
});
const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

const addCustomer = async ()=>{
    let newCustomer = new Customer({
        name: "Kamal Paudel",
    });

    let newOrder = new Order({
        item: "Pizza",
        price: 550,
    });

    newCustomer.orders.push(newOrder);
    await newOrder.save();
    await newCustomer.save();
    }

addCustomer();


// const findCustomer = async()=>{
//     let result = await Customer.find({}).populate("orders");
//     console.log(result[0]);
// }

// findCustomer();
// const addCustomer = async () =>{
//     let cust1 = new Customer({
//         name: "Prawin Paudel"
//     });

//     let order1 = await Order.findOne({item: "Chips"});
//     let order2 = await Order.findOne({item: "Noodles"});

//     cust1.orders.push(order1);
//     cust1.orders.push(order2);

//     let result = await cust1.save();
//     console.log(result);
// }

// addCustomer();



// const addOrder = async () =>{
//     let result = await Order.insertMany([
//         {item: "Noodles", price: 100},
//         {item: "Biscuit", price: 150 },
//         {item: "Chips", price: 50}
//     ]);
//     console.log(result);
// }
// addOrder();